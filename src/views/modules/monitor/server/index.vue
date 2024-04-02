<template>
  <div class="system-module server">
    <Loading v-if="serverLoading"></Loading>
    <div v-else class="modules">
      <CpuVue />
      <Memory />
    </div>
    <NavVue />
  </div>
</template>

<script setup lang="ts">
import CpuVue from './cpu/Cpu.vue';
import { getServerInfo, serverLoading } from './data';
import Memory from './memory/Memory.vue';
import NavVue from './nav/Nav.vue';
onMounted(() => {
  getServerInfo();
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
