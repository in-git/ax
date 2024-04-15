<template>
  <div>
    <a-tabs v-model:activeKey="galleryForm.storage">
      <a-tab-pane key="oss" tab="OSS">
        <a-upload-dragger
          @change="fileChange"
          accept="image/*"
          class="flex-1"
          :maxCount="1"
          :action="`${dev.$state.developer.baseURL}common/upload-oss`"
          :headers="{
            Authorization: `Bearer ${userStore.$state.token}`,
          }"
        >
          <p class="ant-upload-drag-icon">
            <PlusOutlined />
          </p>
          <p class="ant-upload-text">上传到阿里云OSS</p>
        </a-upload-dragger>
      </a-tab-pane>
      <a-tab-pane key="local" tab="服务器">本地上传</a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup lang="ts">
import useSystemStore from '@/store/system';
import useUserStore from '@/store/user';
import type { UploadChangeParam } from 'ant-design-vue/es/upload/interface';
import { galleryForm } from '../../../data/form';

const dev = useSystemStore();
const userStore = useUserStore();

const fileChange = (info: UploadChangeParam) => {
  console.log(info.file);
  if (info.file.response) {
    galleryForm.value.imageUrl = info.file.response.url;
    galleryForm.value.imageName = info.file.response.originalFilename;
  }
};
</script>

<style lang="scss" scoped></style>
