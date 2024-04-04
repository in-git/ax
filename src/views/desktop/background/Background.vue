<template>
  <div class="app-background flex-1 flex flex-col">
    <div :style="style" class="flex-1" v-if="pageStore.$state.desktop.background.type === 'image'">
      <slot></slot>
    </div>

    <VideoBackground v-else>
      <slot></slot>
    </VideoBackground>
  </div>
</template>

<script setup lang="ts">
import usePageStore from '@/store/page';
import type { CSSProperties } from 'vue';
import VideoBackground from 'vue-responsive-video-background-player';
import defaultBackground from '../assets/background.webp';

const pageStore = usePageStore();
const style = computed((): CSSProperties => {
  return {
    background: `url('${pageStore.$state.desktop.background.src || defaultBackground}')`,
  };
});
</script>

<style lang="scss" scoped>
.app-background {
  height: 100vh;
  width: 100vw;
  background: url('../../assets/background.webp');
  z-index: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
