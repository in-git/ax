<template>
  <div class="app-background" :style="style"></div>
</template>

<script setup lang="ts">
import usePageStore from '@/store/page';
import type { CSSProperties } from 'vue';
import defaultBackground from '../../assets/background.png';

const pageStore = usePageStore();
const style = computed((): CSSProperties => {
  return {
    background: `url('${pageStore.$state.desktop.background.src || defaultBackground}')`,
  };
});
</script>

<style lang="scss" scoped>
.app-background {
  position: fixed !important;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  // background: url("../assets/background.png");
  background: url('../../assets/background.webp');
  //   background: url('../assets/taylor.webp');
  z-index: 0;
}
</style>
