<template>
  <a-card class="card__container" :bodyStyle="{ padding: '0' }">
    <div class="system__head px-12">
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
    <div class="px-12 flex justify-between py-8">
      <div>
        <a-pagination
          size="small"
          :total="galleryQuery.total"
          :current="galleryQuery.pageNum"
          :page-size="galleryQuery.pageSize"
          @change="onChange"
        />
      </div>
      <div class="flex gc-4">
        <a-button size="small" @click="getGallery">刷新</a-button>
        <a-button size="small" type="primary" @click="use">使用</a-button>
      </div>
    </div>
  </a-card>
</template>

<script setup lang="ts">
import { setBackground } from '@/store/page/utils';
import { setGallery } from '../../data';
import { currentGallery, galleryQuery, getGallery } from '../../data/data';
import { currentGalleryNav } from '../../data/nav';

const close = () => {
  setGallery({
    show: false,
  });
};

const use = () => {
  if (currentGallery.value) {
    setBackground(currentGallery.value.imageUrl, 'image');
  }
};

const onChange = (page: number, pageSize: number) => {
  galleryQuery.value.pageNum = page;
  galleryQuery.value.pageSize = pageSize;
  getGallery();
};
</script>

<style lang="scss" scoped></style>
