<template>
  <div class="server-memory relative" v-if="serverInfo" id="server-memory">
    <div class="container">
      <div class="loading">
        <div id="loadingMask" :style="{ top: `${100 - process}%` }" class="loading-mask"></div>
        <div id="loading" class="loading-text text-center">
          <div>{{ serverInfo.mem.usage }}%</div>
          <div class="text-12">内存占用率</div>
        </div>
      </div>
    </div>
    <div class="cpu-info p-4">
      <div class="text-16 title">内存信息</div>
      <ul>
        <li>
          <div>总内存</div>
          <div>{{ serverInfo.mem.total }}G</div>
        </li>
        <li>
          <div>已使用</div>
          <div>
            <span>{{ serverInfo.mem.used }}G</span>
          </div>
        </li>
        <li>
          <div>剩余内存</div>
          <div>
            <span>{{ serverInfo.mem.free }}G</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { serverInfo } from '../data';

const process = ref(50);

watch(
  serverInfo,
  () => {
    if (serverInfo.value) {
      process.value = serverInfo.value.cpu.used;
    }
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>

<style lang="scss" scoped>
@import './style';
@import '../loading';
</style>
