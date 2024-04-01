<template>
  <div class="menu-body flex-1">
    <div class="title">辅助工具</div>
    <div>
      <ul class="p-12">
        <li class="flex flex-col justify-center align-center">
          <img src="https://www.baidu.com/favicon.ico" :draggable="false" width="48" height="48" />
          <div class="mt-8">百度</div>
        </li>
        <li class="flex flex-col justify-center align-center" @click="openGpt">
          <img :src="gptPng" :draggable="false" width="48" height="48" />
          <div class="mt-8">CHATGPT</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { openWindow } from '@/global/config/window';
import GptIndex from '@/views/page/gpt/GptIndex.vue';
import gptPng from '../../assets/gpt.png';
import { showWindowMenu } from '../data';

const openGpt = () => {
  openWindow({
    component: markRaw(GptIndex),
    title: 'gpt',
    id: 'gpt',
  });
  showWindowMenu.value = false;
};
</script>

<style lang="scss" scoped>
.menu-body {
  color: white;
  ul {
    display: flex;
    li {
      width: 84px;
      padding: 8px 0;
      border-radius: 2px;
      &:hover {
        background: #333;
      }
      cursor: pointer;
      img {
        border-radius: 8px;
      }
    }
  }
  .title {
    line-height: 42px;
    padding: 0 12px;
    border-bottom: 1px solid #999;
  }
}
</style>
