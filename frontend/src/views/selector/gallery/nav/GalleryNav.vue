<template>
  <div class="gallery-nav">
    <div class="px-12 my-8 text-999">分类列表</div>
    <ul>
      <li
        v-for="(item, key) in galleryNavList"
        :key="key"
        :class="{ active: item.id === currentGalleryNav.id }"
        @click="selectGallery(item)"
      >
        <div class="icon"><img :src="item.icon" width="24" height="24" /></div>
        <div class="ml-12">{{ item.title }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { currentGalleryNav, galleryNavList, selectGallery } from './data';
</script>

<style lang="scss" scoped>
.gallery-nav {
  width: 120px;
  background-color: #f8f8f8;
  border-right: 1px solid #ddd;
  li {
    padding: 8px 12px;
    display: flex;
    align-items: center;
    filter: grayscale(100%);
    cursor: pointer;
    &:hover {
      background-color: #f0f0f0;
      filter: initial;
    }
    .icon {
      width: 24px;
      height: 24px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  li.active {
    color: var(--primary);
    font-weight: bold;
    background-color: #eff6fc;
    filter: initial;
  }
}
</style>
