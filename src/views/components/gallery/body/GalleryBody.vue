<template>
  <div class="gallery-body flex-1 h-100">
    <GalleryHead />
    <div class="dynamic-component">
      <component :is="currentGalleryNav.component"></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { currentGalleryNav } from '../nav/data';
import GalleryHead from './head/GalleryHead.vue';
</script>

<style lang="scss" scoped>
.gallery-body {
  display: flex;
  flex-direction: column;
  .dynamic-component {
    flex: 1;
  }
}
</style>
