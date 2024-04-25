<template>
  <div class="iframe flex-1">
    <a-flex
      class="h-100 flex-col"
      justify="center"
      :align="'center'"
      lass="loading"
      v-show="browserLoading"
    >
      <div class="text-linear-gradient text-16">AX 管理系统</div>
      <div class="system__subtitle">
        正在加载
        <LoadingOutlined spin class="ml-2" />
      </div>
    </a-flex>
    <iframe
      @load="browserLoading = !browserLoading"
      v-show="!browserLoading"
      :src="browserSrc"
      ref="iframeRef"
      :key="browserSrc + forceUpdate"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
import { browserLoading, browserSrc, forceUpdate } from '../data/browser';

const iframeRef = ref<HTMLIFrameElement>();
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
