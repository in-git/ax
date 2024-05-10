<template>
  <div>
    <a-button @click="upload" type="primary">上传</a-button>
  </div>
</template>

<script setup lang="ts">
import { getHost } from '@/store/system/utils';
import { getToken } from '@/store/user/utils';
import { useFileDialog } from '@vueuse/core';
import axios from 'axios';
import { currentPath } from '../../../data/data';

const { files, open, reset, onChange } = useFileDialog({
  accept: '*',
  directory: true,
  multiple: true,
});

const upload = () => {
  open();
};
watch(files, async () => {
  const http = axios.create();
  if (!files.value || files.value?.length <= 0) return;
  const formData = new FormData();
  Array.from(files.value).forEach(file => {
    formData.append('files', file, file.name);
  });

  const host = getHost();
  const token = getToken();
  // 通过 axios 发送 POST 请求
  const response = await http.post(`${host}system/file/upload`, formData, {
    params: {
      path: currentPath.value, // 传递保存路径
    },
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  });
});
</script>

<style lang="scss" scoped></style>
