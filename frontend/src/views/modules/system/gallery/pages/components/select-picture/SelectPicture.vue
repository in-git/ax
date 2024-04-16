<template>
  <div>
    <a-card class="mt-12">
      <div class="uploaded" v-if="galleryForm.imageUrl">
        <a-image class="w-100 h-100" :src="galleryForm.imageUrl"></a-image>
        <div class="system-icon" @click="galleryForm.imageUrl = ''">
          <CloseOutlined />
        </div>
      </div>
      <a-upload-dragger
        v-else
        @change="fileChange"
        accept="image/*"
        :action="getAction()"
        v-model:fileList="fileList"
        multiple
        :headers="{
          Authorization: `Bearer ${userStore.$state.token}`,
        }"
      >
        <p class="ant-upload-drag-icon">
          <PlusOutlined />
        </p>
        <p class="ant-upload-text">点击上传文件</p>
      </a-upload-dragger>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import useUserStore from '@/store/user';
import type { UploadChangeParam } from 'ant-design-vue/es/upload/interface';
import { galleryForm } from '../../../data/form';
import { storageOptions } from '../../../data/options';

const fileList = ref();
const userStore = useUserStore();
const getAction = () => {
  let target = '';
  storageOptions.forEach(e => {
    if (e.value === galleryForm.value.storage) {
      target = e.action;
    }
  });
  return target;
};
const fileChange = (info: UploadChangeParam) => {
  if (info.file.response) {
    galleryForm.value.imageUrl = info.file.response.url;
    galleryForm.value.imageName = info.file.response.originalFilename;
  }
};
</script>

<style lang="scss" scoped>
.uploaded {
  height: 120px;
  border: 1px dashed #eee;
  overflow: hidden;
  position: relative;
  img {
    border-radius: var(--radius);
  }
  .system-icon {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
  }
}
</style>
