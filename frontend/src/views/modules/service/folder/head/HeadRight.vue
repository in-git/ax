<template>
  <div>
    <a-dropdown placement="bottomRight">
      <a-button type="primary">
        上传
        <DownOutlined class="text-12" />
      </a-button>
      <template #overlay>
        <a-menu style="height: fit-content">
          <a-menu-item @click="upload" :disabled="!currentPath">上传文件夹</a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script setup lang="ts">
import { useFileDialog } from '@vueuse/core';
import { currentPath } from '../data/data';
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
