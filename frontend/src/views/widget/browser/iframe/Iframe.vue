<template>
  <div class="iframe flex-1">
    <Loading v-show="browserLoading"></Loading>

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
import type Loading from '@/components/loading/Loading.vue';
import { browserLoading, currentBrowserTab } from '../data/browser';
import { browserTabs } from '../data/browser.tabs';
import FrameComponent from './IframeComponent.vue';
</script>

<style lang="scss" scoped></style>
