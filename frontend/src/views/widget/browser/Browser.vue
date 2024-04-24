<template>
  <a-card class="system__module">
    <BrowserHead />
    <div class="iframe flex-1">
      <iframe :src="browserSrc" ref="iframeRef"></iframe>
    </div>
  </a-card>
</template>

<script setup lang="ts">
import { browserSrc } from './data/data';
import BrowserHead from './head/BrowserHead.vue';
</script>

<style lang="scss" scoped>
:deep(.ant-card-body) {
  height: 100%;
  padding: 4px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
}

.disable {
  pointer-events: none;
}
</style>
