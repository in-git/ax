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
import CpuVue from './cpu/Cpu.vue';
import { getServerInfo, serverInfo, serverLoading } from './data';
import Info from './info/Info.vue';
import Memory from './memory/Memory.vue';
import NavVue from './nav/Nav.vue';

const serverRef = ref<HTMLElement>();

onMounted(() => {
  getServerInfo();
});

nextTick(() => {
  if (serverRef.value)
    serverRef.value.addEventListener(
      'wheel',
      e => {
        e.preventDefault();
      },
      {
        passive: false,
      },
    );
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
