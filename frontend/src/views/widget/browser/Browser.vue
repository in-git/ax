<template>
  <a-card class="system__module">
    <BrowserHead />
    <div class="iframe flex-1">
      <a-flex
        class="h-100 flex-col"
        justify="center"
        :align="'center'"
        lass="loading"
        v-show="browserLoading"
      >
        <div class="text-linear-gradient text-16">AX 管理系统</div>
        <div class="system__subtitle">正在加载...</div>
      </a-flex>
      <iframe
        @load="browserLoading = !browserLoading"
        v-show="!browserLoading"
        :src="browserSrc"
        ref="iframeRef"
        :key="browserSrc + forceUpdate"
      ></iframe>
    </div>
  </a-card>
</template>

<script setup lang="ts">
import { browserLoading, browserSrc, forceUpdate } from './data/data';
import BrowserHead from './head/BrowserHead.vue';

const props = defineProps<{ src?: string }>();
const iframeRef = ref<HTMLIFrameElement>();

watch(
  props,
  () => {
    if (props.src) {
      browserSrc.value = props.src;
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
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
}
.loading {
  width: 100%;
  height: 100%;
  color: #999;
}
.disable {
  pointer-events: none;
}
</style>
