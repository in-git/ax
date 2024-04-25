<template>
  <div
    class="app-background flex-1 flex flex-col"
    v-if="pageStore.$state.desktop.background.type === 'video'"
  >
    <VideoBackground class="h-100" :src="pageStore.$state.desktop.background.src"></VideoBackground>
  </div>
  <div v-else class="app-background" :style="style"></div>
</template>

<script setup lang="ts">
import usePageStore from '@/store/page';
import type { CSSProperties } from 'vue';
import VideoBackground from 'vue-responsive-video-background-player';

const defaultBackground = `http://in-git.gitee.io/ax-resource/wallpaper/windows-11-logo-colorful-background-digital-art-hd-wallpaper-uhdpaper.com-127@0@h.jpg`;

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
