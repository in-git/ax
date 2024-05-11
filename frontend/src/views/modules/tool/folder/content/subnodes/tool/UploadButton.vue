<template>
  <div>
    <a-button @click="upload" type="primary" :disabled="!currentPath">上传</a-button>
  </div>
</template>

<script setup lang="ts">
import { useFileDialog } from '@vueuse/core';
import { currentPath } from '../../../data/data';
import type { UploadFile } from '../data/types';
import { uploadFiles } from '../data/upload';

const { files, open, reset, onChange } = useFileDialog({
  accept: '*',
  directory: true,
  multiple: true,
});

const upload = () => {
  open();
};

onChange(async () => {
  if (files.value) {
    const fileList: UploadFile[] = Array.from(files.value).map(f => {
      return {
        file: f,
        path: f.webkitRelativePath || f.name,
      };
    });
    await uploadFiles(fileList);
    reset();
  }
});
</script>

<style lang="scss" scoped></style>
