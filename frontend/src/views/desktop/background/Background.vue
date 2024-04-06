<template>
  <div
    class="app-background flex-1 flex flex-col"
    v-if="pageStore.$state.desktop.background.type === 'video'"
  >
    <VideoBackground :src="pageStore.$state.desktop.background"></VideoBackground>
  </div>
</template>

<script setup lang="ts">
import usePageStore from '@/store/page';
import VideoBackground from 'vue-responsive-video-background-player';

const pageStore = usePageStore();
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
