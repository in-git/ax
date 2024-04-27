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
    <template v-for="item in browserTabs">
      <KeepAlive :max="10">
        <FrameComponent
          :src="currentBrowserTab.url"
          v-if="currentBrowserTab.id === item.id"
        ></FrameComponent>
      </KeepAlive>
    </template>
  </div>
</template>

<script setup lang="ts">
import { browserLoading, currentBrowserTab } from '../data/browser';
import { browserTabs } from '../data/browser.tabs';
import FrameComponent from './IframeComponent.vue';
</script>

<style lang="scss" scoped></style>
