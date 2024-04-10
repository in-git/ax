<template>
  <div class="flex flex-col desktop">
    <div v-if="tokens" :style="style" class="flex-1 h-100 flex flex-col">
      <Toolbar />
      <Apps />
      <Missions />
    </div>
    <Login v-else />
    <Background></Background>
    <NoticeVue />
  </div>
</template>

<script setup lang="ts">
import usePageStore from '@/store/page';
import useUserStore from '@/store/user';
import type { CSSProperties } from 'vue';
import Apps from './apps/Apps.vue';
import defaultBackground from './assets/background.webp';
import Background from './background/Background.vue';
import Login from './login/Login.vue';
import Missions from './missions/Missions.vue';
import NoticeVue from './notice/Notice.vue';
import Toolbar from './toolbar/Toolbar.vue';

const store = useUserStore();

const tokens = computed(() => {
  return store.$state.token;
});

const pageStore = usePageStore();
const style = computed((): CSSProperties => {
  if (pageStore.$state.desktop.background.type === 'image') {
    return {
      background: `url('${pageStore.$state.desktop.background.src || defaultBackground}')`,
    };
  }
  return {};
});
</script>

<style lang="scss" scoped>
.desktop {
  position: relative;
  height: 100vh;
  overflow: hidden;
}
</style>
