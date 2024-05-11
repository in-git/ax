<template>
  <div>
    <a-button @click="upload" type="primary" :disabled="!currentPath">上传</a-button>
  </div>
</template>

<script setup lang="ts">
import { getHost } from '@/store/system/utils';
import { getToken } from '@/store/user/utils';
import { useFileDialog } from '@vueuse/core';
import { message } from 'ant-design-vue';
import axios from 'axios';
import { loadPath } from '../../../data/action';
import { currentPath } from '../../../data/data';
import { uploadCancelToken, uploadProgressConfig } from '../footer/data';

const { files, open, reset, onChange } = useFileDialog({
  accept: '*',
  directory: true,
  multiple: true,
});

const upload = () => {
  open();
};
// 创建一个用于计算上传速率的函数
const calculateUploadSpeed = (startTime: number, endTime: number, uploadedBytes: number) => {
  const durationInSeconds = (endTime - startTime) / 1000; // 将毫秒转换为秒
  const bytesPerSecond = uploadedBytes / durationInSeconds;
  return bytesPerSecond;
};

onChange(async () => {
  const http = axios.create();
  const host = getHost();
  const token = getToken();
  // 通过 axios 发送 POST 请求
  uploadCancelToken.value = axios.CancelToken.source();
  if (!files.value || files.value?.length <= 0) return;
  const formData = new FormData();
  Array.from(files.value).forEach(file => {
    formData.append('files', file, file.webkitRelativePath);
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
    reset();
  } catch (error) {
    reset();
    console.log(error);
  }
});
</script>

<style lang="scss" scoped></style>
