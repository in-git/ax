<template>
  <a-card class="system__module">
    <ul>
      <li v-for="(item, key) in cacheData" :key="key">
        <a-card></a-card>
      </li>
    </ul>
  </a-card>
</template>

<script setup lang="ts">
import { getCacheNames } from '@/api/modules/monitor/cache/cache';
const cacheData = ref<SystemCache[]>([]);

const getData = async () => {
  const { data } = await getCacheNames();
  if (data.data) {
    cacheData.value = data.data;
  }
};
</script>

<style lang="scss" scoped></style>
