<template>
  <div class="system-module server" ref="serverRef">
    <Loading v-if="serverLoading"></Loading>
    <div v-else class="modules">
      <CpuVue />
      <Memory />
      <NavVue />
      <Info />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core';
import CpuVue from './cpu/Cpu.vue';
import { getServerInfo, serverInfo, serverLoading } from './data';
import Info from './info/Info.vue';
import Memory from './memory/Memory.vue';
import { navIndex, navList, selectNav } from './nav/data';
import NavVue from './nav/Nav.vue';

const serverRef = ref();

const debouncedFn = useDebounceFn((e: WheelEvent) => {
  if (e.deltaY > 0) {
    if (navIndex.value >= navList.length - 1) {
      navIndex.value = 0;
    } else {
      navIndex.value++;
    }
  } else {
    if (navIndex.value <= 0) {
      navIndex.value = navList.length - 1;
    } else {
      navIndex.value--;
    }
  }
  selectNav(navIndex.value);
}, 100);

onMounted(() => {
  getServerInfo();
});

nextTick(() => {
  serverRef.value.addEventListener('wheel', debouncedFn, {
    passive: true,
  });
});
onUnmounted(() => {
  serverInfo.value = undefined;
  serverLoading.value = true;
});
</script>

<style lang="scss" scoped>
.server {
  display: flex;
  flex-direction: column;
  .modules {
    height: 100%;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
