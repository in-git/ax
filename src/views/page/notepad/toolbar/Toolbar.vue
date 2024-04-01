<template>
  <div class="flex toolbar gc-4">
    <FileVue />
    <a-tooltip placement="bottom" title="使用AI处理文件">
      <div class="menu-button" @click="ai()">chatgpt(C)</div>
    </a-tooltip>
  </div>
</template>

<script setup lang="ts">
import type { Notepad, NotepadInjectData } from '../types';
import { chatgpt } from './data';
import FileVue from './file/File.vue';

const props = defineProps<{
  data: Notepad;
}>();
const data = inject<NotepadInjectData>('data')!;
const ai = () => {
  chatgpt(props.data.content);
};
</script>

<style lang="scss" scoped>
.toolbar {
  $hh: 24px;
  height: $hh;
  background: #f8f8f8;
}
</style>
<style lang="scss" scoped>
@import './common.scss';
</style>
