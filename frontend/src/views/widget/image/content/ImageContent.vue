<template>
  <div class="flex-1 relative cover-container">
    <template v-if="cropperImage">
      <cropper
        class="cover"
        :auto-zoom="cropperProps.zoom"
        :stencil-props="cropperProps.stencilProps"
        :src="cropperImage"
        @change="change"
        ref="cropperRef"
        image-restriction="stencil"
        priority="visibleArea"
        :stencil-component="stencilTypes[cropperProps.stencil]"
      />
      <div v-if="cropperResult" class="preview flex">
        <Preview
          :width="120"
          :height="120"
          :image="cropperResult.image"
          :coordinates="cropperResult.coordinates"
        ></Preview>
      </div>
    </template>

    <div
      class="upload flex flex-s flex-col"
      v-else
      vertical
      @drop="drop"
      @dragover="(e: DragEvent) => e.preventDefault()"
    >
      <div>
        <img :src="uploadPng" width="200" />
      </div>
      <div class="system__subtitle text-16">拖拽文件到此上传</div>
      <div>
        <a-button class="upload-button" block size="large" @click="fileUpload" type="primary">
          上传
        </a-button>
      </div>
    </div>
  </div>
  <CropperTools />
</template>

<script setup lang="ts">
import { toBase64, useUploadFile } from '@/utils/file/file';
import { Cropper, Preview } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';
import uploadPng from '../assets/upload.png';
import { cropperImage, cropperProps, cropperRef, cropperResult, stencilTypes } from '../data/data';
import { type CropperData } from '../data/types';
import CropperTools from './tools/CropperTools.vue';

const fileUpload = async () => {
  const files = await useUploadFile({
    accept: 'image/*',
  });
  const file = files[0];
  if (file) {
    cropperImage.value = await toBase64(file);
  }
};
const change = (config: CropperData) => {
  cropperResult.value = config;
};

const drop = async (e: DragEvent) => {
  e.preventDefault();

  const files = e.dataTransfer?.files;
  if (files && files.length > 0) {
    const file = files[0];
    cropperImage.value = await toBase64(file);
  }
};
</script>

<style lang="scss" scoped>
.upload {
  height: 100%;
  border: 2px dashed #6b6b6b86;
  border-radius: var(--radius);
}

.cover {
  height: 100%;
  overflow-y: hidden;
  width: 100%;
}

.upload-button {
  width: 240px;
  margin-top: 34px;
}
.preview {
  position: absolute;
  bottom: 2px;
  z-index: 10;
  right: 2px;
  background-color: #6b6b6b86;
  border-radius: var(--radius);
}
.cover-container {
  background-color: rgb(24, 24, 24);
}
</style>
