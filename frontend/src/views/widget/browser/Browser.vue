<template>
  <a-card class="system__module">
    <BrowserHead />
    <IFrameVue />
  </a-card>
</template>

<script setup lang="ts">
import { useTimeout } from '@vueuse/core';
import { nanoid } from 'nanoid';
import { browserLoading } from './data/browser';
import { createBrowserTab } from './data/browser.methods';
import BrowserHead from './head/BrowserHead.vue';
import IFrameVue from './iframe/Iframe.vue';

type Props = {
  data?: { src?: string; html?: string; title?: string };
};
const props = defineProps<Props>();

watch(
  props,
  () => {
    if (props.data && props.data.src) {
      createBrowserTab({
        title: props.data.title || '新标签页',
        id: nanoid(),
        url: props.data.src,
        history: [],
        pointer: 0,
      });
      // enterUrl(props.data.src, props.data.title);
    } else if (props.data?.html) {
      /* 处理传入的html */
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(browserLoading, () => {
  useTimeout(3000, {
    callback() {
      browserLoading.value = false;
    },
  });
});
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
