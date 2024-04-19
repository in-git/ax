<template>
  <a-card class="card__container" :bodyStyle="{ padding: '0' }">
    <div class="system__head px-12">
      <div>壁纸选择</div>
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
        <a-button size="small" @click="getGallery" :loading="galleryLoading">刷新</a-button>
        <a-button size="small" type="primary" @click="use">使用</a-button>
      </div>
    </div>
  </a-card>
</template>

<script setup lang="ts">
import { setBackground } from '@/store/page/utils';
import { currentGallery, galleryLoading, galleryQuery, getGallery } from './data/data';

const use = () => {
  if (currentGallery.value) {
    setBackground(currentGallery.value, 'image');
  }
};

const onChange = (page: number, pageSize: number) => {
  galleryQuery.value.pageNum = page;
  galleryQuery.value.pageSize = pageSize;
  getGallery();
};
</script>

<style lang="scss" scoped></style>
