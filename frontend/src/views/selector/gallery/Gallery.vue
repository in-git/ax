<template>
  <Teleport to="body">
    <div class="system__module gallery flex" v-if="galleryConfig.show">
      <a-card
        class="gallery-container"
        :body-style="{ padding: '0', height: '100%', display: 'flex' }"
      >
        <GalleryNav />
        <GalleryBody />
      </a-card>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import GalleryBody from './body/GalleryBody.vue';
import { galleryConfig } from './data';
import GalleryNav from './nav/GalleryNav.vue';


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
  }
}
</style>
