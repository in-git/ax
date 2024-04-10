<template>
  <div class="gallery-head">
    <div class="system-head px-12">
      <div class="flex">
        <div>
          <img :src="currentGalleryNav.icon" width="24" class="mr-12" />
          {{ currentGalleryNav.title }}
        </div>
      </div>
      <div class="system-icon" @click="close">
        <close-outlined />
      </div>
    </div>
    <div class="px-12 flex justify-between py-8" v-if="pexelsResult.extraInfo">
      <div>
        <a-pagination
          size="small"
          :total="pexelsResult.extraInfo.total_results"
          :current="pexelsQuery.pageNum"
          :page-size="pexelsQuery.pageSize"
          @change="onChange"
        />
      </div>
      <div class="flex gc-4">
        <div>
          <a-button size="small" @click="getPexelsPhotos">刷新</a-button>
        </div>
        <div>
          <a-button size="small" type="primary" @click="use">使用</a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { setBackground } from '@/store/page/utils';
import { setGallery } from '../../data';
import { currentGalleryNav } from '../../nav/data';
import { currentPhoto, getPexelsPhotos, pexelsQuery, pexelsResult } from '../wallpaper/data';

const close = () => {
  setGallery({
    show: false,
  });
};

const use = () => {
  setBackground(currentPhoto.value, 'image');
};

const onChange = (page: number, pageSize: number) => {
  pexelsQuery.value.pageNum = page;
  pexelsQuery.value.pageSize = pageSize;
  getPexelsPhotos();
};
</script>

<style lang="scss" scoped>
.gallery-head {
  background-color: #f2f3f3;
}
</style>
