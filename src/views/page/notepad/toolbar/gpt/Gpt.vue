<template>
  <div>
    <a-tooltip title="使用AI处理" placement="bottom">
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
import type { NotepadInjectData } from '../../types';
const parentData = inject<NotepadInjectData>('data')!;
const ai = () => {
  const { content } = getData(parentData.id);
  if (content) {
    openWindow({
      component: markRaw(GptIndex),
      title: 'ChatGpt',
      icon: chatgptPng,
      data: content,
    });
  }
};
</script>

<style lang="scss" scoped>
@import '../common.scss';
</style>
