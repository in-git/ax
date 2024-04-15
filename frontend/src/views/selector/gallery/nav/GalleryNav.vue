<template>
  <div class="gallery-nav">
    <div class="p-8 px-12">分类列表</div>
    <a-menu class="h-100" v-model:selected-keys="galleryKeys">
      <a-menu-item
        @click="selectGalleryNav(item)"
        :key="item.type"
        v-for="(item, key) in galleryNavList"
      >
        <template #icon>
          <img :src="item.icon" width="20" />
        </template>
        {{ item.title }}
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script setup lang="ts">
import { galleryKeys, galleryNavList, selectGalleryNav } from '../data/nav';
</script>

<style lang="scss" scoped>
.gallery-nav {
  width: 160px;
  background-color: #f8f8f8;
  border-right: 1px solid #ddd;
}
</style>
