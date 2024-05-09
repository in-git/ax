<template>
  <a-card class="gallery-body h-100" :body-style="{ paddingTop: '0' }">
    <GalleryHead />
    <template v-if="galleryData.length > 0">
      <div class="list">
        <div
          class="source-item"
          :bordered="false"
          v-for="(item, key) in galleryData"
          :key="item"
          @click="selectItem(item)"
          justify="center"
        >
          <div class="selected" v-if="currentGallery === item">
            <CheckOutlined />
          </div>
          <img :src="getStaticImage(item)" v-if="galleryType === 'image'" :alt="item" height="80" />
          <video
            muted
            controlslist="nodownload"
            v-else
            ref="videoRefs"
            @mouseenter="mouseenter(key)"
            @mouseleave="mouseleave(key)"
            :src="item"
            height="80"
          ></video>
        </div>
      </div>
    </template>

    <a-empty v-else></a-empty>
  </a-card>
</template>

<script setup lang="ts">
import { getStaticImage } from '@/api/utils/image';
import { currentGallery, galleryData, galleryType } from './data/data';
import GalleryHead from './GalleryHead.vue';

const videoRefs = ref<HTMLVideoElement[]>();

const selectItem = (item: string) => {
  currentGallery.value = item;
};

const mouseenter = (index: number) => {
  if (videoRefs.value) {
    videoRefs.value[index].play();
  }
};

const mouseleave = (index: number) => {
  if (videoRefs.value) {
    videoRefs.value[index].pause();
  }
};
</script>

<style lang="scss" scoped>
.gallery-body {
  margin-left: 8px;
  .list {
    display: grid;
    gap: 8px;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    place-items: start;
    height: 90px;
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

  .source-item {
    position: relative;
    text-align: center;
    padding: 4px;
    width: 100%;
    overflow: hidden;
    height: 80px;
    background-image: url('../assets/loading.png');
    background-position: center;
    background-size: 64px 64px;
    background-repeat: no-repeat;
    video,
    img {
      width: 100%;
      height: 100%;
      border-radius: var(--radius);
      overflow: hidden;
      border: 1px solid #b4b4b473;
    }
  }
}
</style>
@/global/data/resource.list
