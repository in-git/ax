<template>
  <div class="gallery-body flex-1">
    <GalleryHead />
    <a-card class="card__container" :loading="galleryLoading">
      <div class="list" v-if="galleryData && galleryData.length > 0">
        <div
          class="image-item"
          :bordered="false"
          v-for="item in galleryData"
          :key="item"
          @click="selectItem(item)"
          justify="center"
        >
          <div class="selected" v-if="currentGallery === getStaticHost('wallpaper/' + item)">
            <CheckOutlined />
          </div>
          <img :src="getStaticHost(`wallpaper/${item}`)" :alt="item" height="80px" />
          {{ getStaticHost(`wallpaper/${item}`) }}
        </div>
      </div>
      <a-empty v-else></a-empty>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { getStaticHost } from '@/store/system/utils';
import { currentGallery, galleryData, galleryLoading, getGallery } from './data/data';
import GalleryHead from './GalleryHead.vue';

const selectItem = (item: string) => {
  currentGallery.value = getStaticHost('wallpaper/' + item);
};

getGallery();
</script>

<style lang="scss" scoped>
.gallery-body {
  .list {
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    place-items: start;
    height: 80px;
    text-align: center;
  }
  :deep(.ant-card) {
    box-shadow: none;
    overflow: hidden;
  }
  :deep(.ant-card-body) {
    padding: 12px;
    height: 100%;
  }

  .selected {
    position: absolute;
    top: 4px;
    right: 4px;
    color: white;
    width: 24px;
    height: 24px;
    text-align: center;
    line-height: 24px;
    border-radius: 50%;
    font-size: 12px;
    background-color: var(--primary);
    z-index: 10;
  }

  .image-item {
    position: relative;
    text-align: center;
    padding: 4px;
    width: 100%;
    overflow: hidden;
    height: 100%;
    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
      border-radius: var(--radius);
      overflow: hidden;
    }
  }
}
</style>
