<template>
  <div class="flex flex-col desktop">
    <div v-if="tokens" class="flex-1 h-100 flex flex-col">
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
import Apps from './apps/Apps.vue';
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
</script>

<style lang="scss" scoped>
.desktop {
  position: relative;
  height: 100vh;
  overflow: hidden;
}
</style>
