<template>
  <a-card class="system__module">
    <a-button @click="test">测试壁纸读取</a-button>
  </a-card>
</template>

<script setup lang="ts">
import { initWallpaper } from '@/api/modules/system/config/utils';

const test = async () => {
  const data = await initWallpaper();
  console.log(data);
};
</script>

<style lang="scss" scoped></style>
