<template>
  <a-card class="system__module">
    <BrowserHead />
    <IFrameVue />
  </a-card>
</template>

<script setup lang="ts">
import { gotoUrl } from './data/browser.methods';
import BrowserHead from './head/BrowserHead.vue';
import IFrameVue from './iframe/Iframe.vue';
type Props = {
  data: { src?: string; html?: string };
};
const props = defineProps<Props>();

watch(
  props,
  () => {
    console.log(props);

    if (props.data?.src) {
      gotoUrl(props.data?.src);
    } else if (props.data?.html) {
      /* 处理传入的html */
    }
  },
  {
    deep: true,
    immediate: true,
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
