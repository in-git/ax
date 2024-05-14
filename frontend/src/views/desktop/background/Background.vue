<template>
  <div class="fixed">
    <div class="app-background flex-1 flex flex-col" v-if="comBackground.type === 'video'">
      <VideoBackground class="h-100" :src="backgroundSrc"></VideoBackground>
    </div>
    <div v-else-if="comBackground.type === 'image'" class="app-background">
      <div class="w-100 h-100 background" :style="style"></div>
      <Loading v-if="backgroundLoading" desc="正在加载背景图片"></Loading>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getStaticImage } from '@/api/utils/image';
import Loading from '@/components/loading/Loading.vue';
import { EventBusEnum } from '@/global/enum/eventBus';
import { LocalforageEnum } from '@/global/enum/localforage';
import usePageStore from '@/store/page';
import { backgroundLoading } from '@/store/page/utils';
import { isBase64 } from '@/utils/file/file';
import { useEventBus } from '@vueuse/core';
import { message } from 'ant-design-vue';
import localforage from 'localforage';
import type { CSSProperties } from 'vue';
import VideoBackground from 'vue-responsive-video-background-player';
import defaultBackground from '../assets/background.webp';

const pageStore = usePageStore();
const bus = useEventBus(EventBusEnum.UPDATE_BACKGROUND);
const backgroundSrc = ref<string>('');

const comBackground = computed(() => {
  return pageStore.$state.desktop.background;
});

/**
 * @description: 获取本地壁纸
 */
const getLocalBackground = async () => {
  let src: any = await localforage.getItem(LocalforageEnum.BACKGROUND_SRC);
  const type = comBackground.value.type;
  if (src) {
    if (isBase64(src.toString())) {
      backgroundSrc.value = src;
    } else {
      if (type === 'image') backgroundSrc.value = getStaticImage(src) || defaultBackground;
      else {
        backgroundSrc.value = src;
      }
    }
  } else {
    message.warn('资源路径出了点问题，请重新设置壁纸');
  }
};
/**
 * @description: 设置壁纸后更新
 */
bus.on(() => {
  getLocalBackground();
});

onMounted(async () => {
  getLocalBackground();
});

const style = computed((): CSSProperties => {
  if (comBackground.value.type === 'image' && backgroundLoading) {
    return {
      background: `url('${backgroundSrc.value}')`,
      filter: `
      brightness(${100 - comBackground.value.brightness}%)
      grayscale(${comBackground.value.grayscale}%)`,
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
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  animation: app-background 0.8s forwards;
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
