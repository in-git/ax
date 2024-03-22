<template>
  <div class="flex flex-col desktop">
    <Transition>
      <Toolbar v-if="!!tokens" />
    </Transition>
    <!-- <Apps /> -->
    <Login />
    <Transition>
      <Missions v-if="!!tokens" />
    </Transition>
  </div>
</template>

<script setup lang="ts">
// import Apps from './apps/Apps.vue';
import useUserStore from '@/store/user';
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
