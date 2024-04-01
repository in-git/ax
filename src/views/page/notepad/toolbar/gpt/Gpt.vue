<template>
  <div>
    <a-tooltip title="使用AI处理" placement="bottom" :mouseLeaveDelay="0">
      <div class="menu-button flex gc-2" @click="ai()" accesskey="c">
        <div>
          AI
          <span class="text-12 text-999">(Alt+C)</span>
        </div>
      </div>
    </a-tooltip>
  </div>
</template>

<script setup lang="ts">
import chatgptPng from '@/assets/apps/gpt.png';
import { getData, openWindow } from '@/global/config/window';
import GptIndex from '../../../gpt/GptIndex.vue';
const parentData = inject<string>('data')!;
const ai = () => {
  const data = getData(parentData);
  if (data)
    openWindow({
      component: markRaw(GptIndex),
      title: 'ChatGpt',
      icon: chatgptPng,
      data,
    });
};
</script>

<style lang="scss" scoped>
@import '../common.scss';
</style>
