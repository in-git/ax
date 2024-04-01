<template>
  <div class="toolbar flex align-center">
    <a-dropdown trigger="click">
      <div class="menu">文件(F)</div>
      <template #overlay>
        <a-menu :items="menuList"></a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script setup lang="ts">
import notepadPng from '@/assets/system/notepad.png';
import { openWindow } from '@/global/config/window';
import { nanoid } from 'nanoid';
import Notepad from '../Notepad.vue';
const menuList = [
  {
    key: '1',
    label: '新建(N)',
    onClick: () => {
      console.log('new');
      openWindow({
        component: markRaw(Notepad),
        title: '记事本',
        id: `notepad${nanoid(8)}`,
        icon: notepadPng,
      });
    },
  },
];
</script>

<style lang="scss" scoped>
.toolbar {
  $hh: 32px;
  height: $hh;
  background: #f8f8f8;
  .menu {
    border: 1px solid transparent;
    width: fit-content;
    cursor: default;
    padding: 4px;
    user-select: none;
    &:hover {
      border: 1px solid #7ba4da;
      background: #7ba4da15;
    }
  }
}
</style>
