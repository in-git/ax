<template>
  <div class="flex flex-col desktop">
    <template v-if="tokens">
      <Toolbar />
      <Apps />
      <Missions />
    </template>
    <Login v-else />
  </div>
</template>

<script setup lang="ts">
import useUserStore from '@/store/user';
import Apps from './apps/Apps.vue';
import Login from './login/Login.vue';
import Missions from './missions/Missions.vue';
import Toolbar from './toolbar/Toolbar.vue';

const store = useUserStore();

const tokens = computed(() => {
  return store.$state.token;
});
</script>

<style lang="scss" scoped>
.desktop {
  position: relative;
  height: 100vh;
  overflow: hidden;
}
</style>
