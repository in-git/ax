<template>
  <a-card class="system__module">
    <BrowserHead />
    <IFrameVue />
  </a-card>
</template>

<script setup lang="ts">
import { browserSrc } from './data/browser';
import BrowserHead from './head/BrowserHead.vue';
import IFrameVue from './iframe/Iframe.vue';
const props = defineProps<{ src?: string; html?: string }>();

watch(
  props,
  () => {
    if (props.src) {
      browserSrc.value = props.src;
    } else if (props.html) {
      /* 处理传入的html */
    }
  },
  {
    deep: true,
  },
);
</script>

<style lang="scss" scoped>
:deep(.ant-card-body) {
  height: 100%;
  padding: 4px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.disable {
  pointer-events: none;
}
</style>
