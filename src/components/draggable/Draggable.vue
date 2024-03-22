<template>
  <VueDraggable
    :w="w"
    :h="h"
    :z="z"
    v-model:x="x"
    v-model:y="y"
    :resizable="resizable"
    drag-handle=".drag-header"
    @dragstop="dragstop"
    @mousedown="toTop"
  >
    <slot name="head">
      <div class="drag-header flex justify-between align-center">
        <div>{{ title }}</div>
        <div>
          <div class="system-icon" @click="close">
            <CloseOutlined />
          </div>
        </div>
      </div>
    </slot>
    <div class="drag-content">
      <slot></slot>
    </div>
  </VueDraggable>
</template>

<script setup lang="ts">
import { windowList } from '@/global/config/window';
import VueDraggable from 'draggable-resizable-vue3';

const emit = defineEmits(['close']);
const props = withDefaults(
  defineProps<{
    w?: number;
    h?: number;
    title: string;
    z?: number;
    id?: string;
    resizable?: boolean;
  }>(),
  {
    w: 800,
    h: 600,
    resizable: false,
  },
);

const toTop = () => {
  windowList.value.filter(e => {
    e.z = 0;
    if (e.id === props.id) {
      e.z = 100;
    }
  });
};
const close = () => {
  emit('close', props.id);
};
const x = ref(window.innerWidth / 2 - props.w / 2);
const y = ref(window.innerHeight / 2 - props.h / 2);
const maxHeight = window.innerHeight;

const dragstop = () => {
  if (y.value < 0) {
    y.value = 0;
  }
  if (y.value > maxHeight - 100) {
    y.value = maxHeight - 100;
  }
};
</script>

<style lang="scss" scoped>
$hh: 42px;
.drv {
  border: 1px solid #eee;
  box-shadow: 0 0 25px #a0a0a065;
  border-radius: 4px;
  overflow: hidden;
}
.drag-header {
  padding: 0 12px;
  cursor: move;
  background: #f8f8f8;
  height: 40px !important;
  border-bottom: 1px solid #ddd;
}
.drag-content {
  height: calc(100% - 40px);
  line-height: initial;
  position: relative;
}
.system-icon {
  color: #333;
  &:hover {
    color: #111;
  }
}
</style>
