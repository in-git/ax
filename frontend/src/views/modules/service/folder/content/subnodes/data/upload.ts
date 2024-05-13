import { getHost } from '@/store/system/utils';
import { getToken } from '@/store/user/utils';
import { joinUrl } from '@/utils/file/format';
import { message } from 'ant-design-vue';
import axios from 'axios';
import { loadPath } from '../../../data/action';
import { currentPath } from '../../../data/data';
import { uploadCancelToken, uploadStatus } from './config';
import type { UploadFile } from './types';

export const uploadFiles = async (files: UploadFile[]) => {
  const http = axios.create();
  const host = getHost();
  const token = getToken();

  // 通过 axios 发送 POST 请求
  uploadCancelToken.value = axios.CancelToken.source();
  if (!files || files?.length <= 0) return;
  const formData = new FormData();
  Array.from(files).forEach(file => {
    formData.append('files', file.file, file.path || file.file.name);
  });
  try {
    message.success('正在上传,请稍后，完成后会发送通知');
    uploadStatus.value = 'loading';
    const response = await http.post(joinUrl(host, `afm/file/upload`), formData, {
      params: {
        path: currentPath.value, // 传递保存路径
      },
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
      cancelToken: uploadCancelToken.value.token,
      timeout: 0,
    });
    if (response.data.code === '401') {
      message.warn(response.data.msg);
    } else if (response.data.code === 200) {
      message.success('文件已上传');
      loadPath();
    } else {
      message.warning(response.data.msg);
    }
    uploadStatus.value = 'end';
  } catch (error: any) {
    message.warn('出了点问题', error.toString());
  }
};
