<template>
  <div class="gallery-body flex-1">
    <GalleryHead />
    <a-card>
      <div class="list">
        <a-card
          :bordered="false"
          v-for="item in galleryData"
          :key="item.galleryId"
          @click="selectItem(item)"
        >
          <template #cover>
            <a-image :alt="item.imageName" :src="ossURL + item.imageUrl" height="80px"></a-image>
          </template>
        </a-card>
      </div>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import type { SystemGallery } from '@/api/modules/system/gallery/types';
import { ossURL } from '@/api/utils/config';
import { currentGallery, galleryData, getGallery } from '../data/data';
import GalleryHead from './head/GalleryHead.vue';

const selectItem = (item: SystemGallery) => {
  currentGallery.value = item;
};

getGallery();
</script>

<style lang="scss" scoped>
.gallery-body {
  .list {
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    place-items: start;
    height: 100%;
    img {
      object-fit: contain;
    }
  }
  :deep(.ant-card) {
    box-shadow: none;
  }
  :deep(.ant-card-body) {
    padding: 12px;
    height: 100%;
  }
}
</style>
