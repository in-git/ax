<template>
  <iframe
    @load="onLoad"
    :src="currentBrowserTab.url"
    v-show="!browserLoading"
  ></iframe>
</template>

<script setup lang="ts">
import { browserLoading, currentBrowserTab } from '../data/browser';

const onLoad = () => {
  browserLoading.value = false;
};

defineProps<{
  src: string;
}>();
</script>

<style lang="scss" scoped>
iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.loading {
  width: 100%;
  height: 100%;
  color: #999;
}
</style>
