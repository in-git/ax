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
  return {
    left: contextMenu.value.x + 'px',
    top: contextMenu.value.y + 'px',
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
  ::v-deep(.ant-menu-item) {
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
