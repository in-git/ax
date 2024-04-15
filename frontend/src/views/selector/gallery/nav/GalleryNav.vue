<template>
  <a-card :body-style="{ padding: '0' }" class="gallery-nav">
    <div class="p-8 px-12">分类列表</div>
    <a-menu class="h-100" v-model:selected-keys="galleryKeys">
      <a-menu-item @click="selectGalleryNav(item)" :key="item.type" v-for="(item, key) in navList">
        <img :src="item.icon" width="24" class="mr-12" />
        {{ item.title }}
      </a-menu-item>
    </a-menu>
  </a-card>
</template>

<script setup lang="ts">
import type { GalleryType } from '@/api/modules/system/gallery/types';
import { galleryKeys, galleryNavList, selectGalleryNav } from '../data/nav';
import { galleryConfig } from '../data';

const navList = computed(() => {
  return galleryNavList.filter(e => {
    return e.type === galleryConfig.value.type;
  });
});
</script>

<style lang="scss" scoped>
.gallery-nav {
  width: 160px;
  border-radius: 0;
}
</style>
