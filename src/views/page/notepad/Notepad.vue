<template>
  <div class="notepad system-module">
    <ToolbarVue />
    <div style="height: calc(100% - 40px)">
      <textarea v-model="notepad.content" v-focus></textarea>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Notepad {
  editorType: 'textarea';
  content: string;
}
const notepad = ref<Notepad>({
  editorType: 'textarea',
  content: '',
});
const props = defineProps<{
  data?: Notepad;
}>();
import ToolbarVue from './toolbar/Toolbar.vue';
watch(props, () => {
  if (props.data) {
    notepad.value = props.data;
  }
});
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
  font-size: 12px;
  background-size: 100% 26px;
  background-attachment: local; /*  这里需要根据 textarea 的内容进行滚动 */
  /* textarea样式修改 */
  width: 100%;
  color: #333;
  word-break: break-all;
  overflow-x: hidden;
}
</style>
