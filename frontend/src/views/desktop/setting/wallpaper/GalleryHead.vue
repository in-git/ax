<template>
  <a-card class="card__container" :bordered="false" :bodyStyle="{ padding: '0' }">
    <div class="system__head">
      <div>壁纸选择</div>
    </div>
    <div class="px-12 flex justify-between py-8">
      <div>
        <a-radio-group
          @change="changeGalleryType"
          v-model:value="galleryType"
          :options="typeOptions"
        ></a-radio-group>
      </div>
      <div class="flex gc-4">
        <a-button size="small" @click="getGallery" :loading="galleryLoading">刷新</a-button>
        <a-button size="small" type="primary" @click="use">使用</a-button>
      </div>
    </div>
  </a-card>
</template>

<script setup lang="ts">
import { setBackground } from '@/store/page/utils';
import {
  changeGalleryType,
  currentGallery,
  galleryLoading,
  galleryType,
  getGallery,
} from './data/data';

const use = () => {
  console.log(currentGallery.value);

  if (currentGallery.value) {
    setBackground(currentGallery.value, galleryType.value);
  }
};

const typeOptions = [
  {
    label: '图片',
    value: 'image',
  },
  {
    label: '视频',
    value: 'video',
  },
];
</script>

<style lang="scss" scoped>
.card__container {
  position: sticky;
  top: 0;
  z-index: 100;
}
</style>
