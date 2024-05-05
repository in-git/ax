<template>
  <div class="fixed">
    <div class="app-background flex-1 flex flex-col" v-if="backgroundType.type === 'video'">
      <VideoBackground class="h-100" :src="backgroundType.src"></VideoBackground>
    </div>
    <div v-else-if="backgroundType.type === 'image'" class="app-background">
      <div class="w-100 h-100 background" :style="style"></div>
      <Loading v-if="backgroundLoading" desc="正在加载背景图片"></Loading>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getStaticImage } from '@/api/utils/image';
import Loading from '@/components/loading/Loading.vue';
import usePageStore from '@/store/page';
import { backgroundLoading } from '@/store/page/utils';
import type { CSSProperties } from 'vue';
import VideoBackground from 'vue-responsive-video-background-player';
import defaultBackground from '../assets/background.webp';

const pageStore = usePageStore();

const backgroundType = computed(() => {
  return pageStore.$state.desktop.background;
});

const style = computed((): CSSProperties => {
  /* 判断是否有背景图片，有就加载，没有就设置默认背景 */
  let background = '';
  if (backgroundType.value.src.startsWith('data:image')) {
    background = backgroundType.value.src;
  } else {
    background = backgroundType.value.src
      ? getStaticImage(`${backgroundType.value.src}`)
      : defaultBackground;
  }
  if (backgroundType.value.type === 'image' && backgroundLoading) {
    return {
      background: `url('${background}')`,
      filter: `
      brightness(${100 - backgroundType.value.brightness}%)
      grayscale(${backgroundType.value.grayscale}%)`,
    };
  }
  return {
    background: '#333',
  };
});
</script>

<style lang="scss" scoped>
.background {
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
}
.app-background {
  height: 100vh;
  width: 100vw;
  z-index: 10;

  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  animation: app-background 2s forwards;
  @keyframes app-background {
    0% {
      opacity: 0;
      filter: brightness(0%);
    }
    100% {
      opacity: 1;
      filter: brightness(100%);
    }
  }
}
</style>
