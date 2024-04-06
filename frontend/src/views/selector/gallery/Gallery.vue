<template>
  <Teleport to="body">
    <div class="system-module gallery flex" v-if="galleryConfig.show">
      <div class="gallery-container flex">
        <GalleryNav />
        <GalleryBody />
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { useEventBus } from '@vueuse/core';
import GalleryBody from './body/GalleryBody.vue';
import { galleryConfig } from './data';
import GalleryNav from './nav/GalleryNav.vue';
const bus = useEventBus('gallery');
const emit = defineEmits(['update:visible']);

bus.on(() => {
  close();
});
</script>

<style lang="scss" scoped>
.gallery {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #616161b9;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  .gallery-container {
    border-radius: var(--radius);
    overflow: hidden;
    width: 800px;
    height: 600px;
    background-color: #f5f2f3;
  }
}
</style>
