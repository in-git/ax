<template>
  <div class="tools">
    <a-dropdown trigger="click">
      <div class="menu-button">工具</div>
      <template #overlay>
        <a-menu :items="items"></a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script setup lang="ts">
import { getData, setData } from '@/global/config/window';
import type { ItemType } from 'ant-design-vue';

const notepadId = inject<string>('data')!;
const items: ItemType[] = [
  {
    label: '字符串反转',
    key: '3-1',
    onClick() {
      const text = getData(notepadId);
      if (text) {
        const result = text.split('').reverse().join('');
        setData(notepadId, result);
      }
    },
  },
];
</script>

<style lang="scss" scoped>
@import '../common.scss';
</style>
