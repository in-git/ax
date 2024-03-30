<template>
  <div class="contextmenu" v-if="contextMenu.show" :style="style" ref="contextMenuRef">
    <a-menu
      @select="contextMenu.show = false"
      :items="contextMenu.items"
      style="width: 140px"
    ></a-menu>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { contextMenu } from './data';

const contextMenuRef = ref();
const style = computed(() => {
  let top = contextMenu.value.y || 0;

  const maxY = window.innerHeight - contextMenu.value.items.length * 50;
  if (top > maxY) {
    top = maxY;
  }
  return {
    left: contextMenu.value.x + 'px',
    top: `${top}px`,
  };
});

onClickOutside(contextMenuRef, () => {
  contextMenu.value.show = false;
});
</script>

<style lang="scss" scoped>
.contextmenu {
  border: 1px solid #eee;
  position: fixed;
  overflow-y: hidden;
  z-index: 120;
  ::v-deep(.ant-menu-item) {
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
