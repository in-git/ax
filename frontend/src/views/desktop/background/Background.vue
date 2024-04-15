<template>
  <div
    class="app-background flex-1 flex flex-col"
    v-if="pageStore.$state.desktop.background.type === 'video'"
  >
    <VideoBackground :src="pageStore.$state.desktop.background"></VideoBackground>
  </div>
  <div v-else :style="style" class="app-background"></div>
</template>

<script setup lang="ts">
import usePageStore from '@/store/page';
import type { CSSProperties } from 'vue';
import VideoBackground from 'vue-responsive-video-background-player';
import defaultBackground from '../assets/background.webp';
const pageStore = usePageStore();

const style = computed((): CSSProperties => {
  if (pageStore.$state.desktop.background.type === 'image') {
    return {
      background: `url('${pageStore.$state.desktop.background.src || defaultBackground}')`,
      filter: `
      brightness(${100 - pageStore.$state.desktop.background.brightness}%)
      grayscale(${pageStore.$state.desktop.background.grayscale}%)`,
    };
  }
  return {};
});
</script>

<style lang="scss" scoped>
.app-background {
  height: 100vh;
  width: 100vw;
  z-index: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
