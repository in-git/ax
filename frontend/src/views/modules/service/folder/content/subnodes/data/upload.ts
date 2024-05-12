import { getHost } from '@/store/system/utils';
import { getToken } from '@/store/user/utils';
import { message } from 'ant-design-vue';
import axios from 'axios';
import { loadPath } from '../../../data/action';
import { currentPath } from '../../../data/data';
import { uploadCancelToken, uploadProgressConfig } from './config';
import type { UploadFile } from './types';

// 创建一个用于计算上传速率的函数
const calculateUploadSpeed = (startTime: number, endTime: number, uploadedBytes: number) => {
  const durationInSeconds = (endTime - startTime) / 1000; // 将毫秒转换为秒
  const bytesPerSecond = uploadedBytes / durationInSeconds;
  return bytesPerSecond;
};

export const uploadFiles = async (files: UploadFile[]) => {
  const http = axios.create();
  const host = getHost();
  const token = getToken();
  console.log(files);

  // 通过 axios 发送 POST 请求
  uploadCancelToken.value = axios.CancelToken.source();
  if (!files || files?.length <= 0) return;
  const formData = new FormData();
  Array.from(files).forEach(file => {
    formData.append('files', file.file, file.path || file.file.name);
  });
  const startTime = new Date().getTime(); // 记录上传开始时间
  try {
    uploadProgressConfig.value.progress = 0;

    const response = await http.post(`${host}system/file/upload`, formData, {
      params: {
        path: currentPath.value, // 传递保存路径
      },
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
      cancelToken: uploadCancelToken.value.token,
      timeout: 0,
      onUploadProgress(progressEvent) {
        if (progressEvent && progressEvent.total) {
          const uploadedBytes = progressEvent.loaded;
          const endTime = new Date().getTime(); // 记录上传结束时间

          const uploadSpeed = calculateUploadSpeed(startTime, endTime, uploadedBytes);
          uploadProgressConfig.value.progress = Math.round(
            (progressEvent.loaded / progressEvent.total) * 100,
          );
          uploadProgressConfig.value.rate = uploadSpeed;
          console.log(uploadProgressConfig.value.progress);
        }
      },
    });
    if (response.data.code === 200) {
      message.success(response.data.msg);
      loadPath();
    } else {
      message.warning(response.data.msg);
    }
  } catch (error) {
    console.log(error);
  }
};
