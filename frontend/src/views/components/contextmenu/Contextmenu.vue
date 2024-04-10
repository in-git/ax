<template>
  <div class="contextmenu" v-if="contextMenu.show" :style="style" ref="contextMenuRef">
    <a-menu @select="select" @click="handleClick" :items="contextMenu.items"></a-menu>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import type { MenuInfo } from 'ant-design-vue/es/menu/src/interface';
import { contextMenu } from './data';

const contextMenuRef = ref();

const select = () => {
  contextMenu.value.show = false;
};

const handleClick = (menuInfo: MenuInfo) => {
  const item = menuInfo.item;
  console.log(item);
};

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
    height: 32px;
    line-height: 32px;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
