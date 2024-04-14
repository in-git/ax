<template>
  <div class="notepad system__module">
    <ToolbarVue />
    <div style="height: calc(100% - 40px)">
      <textarea v-model="content" v-focus @input="onChange"></textarea>
    </div>
  </div>
</template>

<script setup lang="ts">
import { setAttr } from '@/global/config/window';
import ToolbarVue from './toolbar/Toolbar.vue';

const props = defineProps<{
  data?: string;
  id: string;
}>();

const content = ref<string>('');
provide('data', props.id || '');

watch(
  props,
  () => {
    content.value = props.data || '';
  },
  {
    deep: true,
    immediate: true,
  },
);

const onChange = () => {
  setAttr(props.id, 'data', content.value);
};
</script>

<style lang="scss" scoped>
textarea {
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
  background: linear-gradient(transparent 95%, #585c5c4b 0);
  line-height: 26px;
  background-size: 100% 26px;
  background-attachment: local; /*  这里需要根据 textarea 的内容进行滚动 */
  /* textarea样式修改 */
  width: 100%;
  color: #333;
  word-break: break-all;
  overflow-x: hidden;
}
</style>
./types
