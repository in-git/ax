<template>
  <div class="contextmenu" v-show="contextMenu.show" :style="style" ref="contextMenuRef">
    <a-menu @select="select" v-model:selectedKeys="keys" :items="contextMenu.items"></a-menu>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { contextMenu } from './data';

const contextMenuRef = ref();
const keys = ref<string[]>([]);
const select = () => {
  contextMenu.value.show = false;
  keys.value = [];
};

const style = computed(() => {
  let top = contextMenu.value.y || 0;
  let left = contextMenu.value.x || 0;

  const maxY = window.innerHeight - contextMenu.value.items.length * 50;
  const maxX = window.innerWidth - 140;
  console.log(maxX);

  if (top > maxY) {
    top = maxY;
  }
  if (left > maxX) {
    left = maxX;
  }
  return {
    left: left + 'px',
    top: `${top}px`,
  };
});

onClickOutside(contextMenuRef, () => {
  contextMenu.value.show = false;
  keys.value = [];
});
</script>

<style lang="scss" scoped>
.contextmenu {
  border: 1px solid #eee;
  position: fixed;
  overflow-y: hidden;
  z-index: 120;
  ::v-deep(.ant-menu-item) {
    height: 32px;
    line-height: 32px;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
