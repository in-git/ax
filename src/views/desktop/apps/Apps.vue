<template>
  <div class="apps flex-1 p-12">
    <ul ref="appRef">
      <li
        v-for="(item, key) in menuList"
        :key="key"
        :class="{ selected: item.path === selected }"
        @click="select(item)"
      >
        <div class="logo">
          <img :src="logo" :draggable="false" width="48" />
        </div>
        <div class="title">{{ item.meta.title }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import logo from '@/assets/logo.png';
import type { MenuItem } from '@/types/system';
import { useSortable } from '@vueuse/integrations/useSortable';

const selected = ref<string>('');
const appRef = ref();

const menuList: MenuItem[] = [
  {
    path: 'vue',
    meta: {
      icon: '',
      title: 'Vue',
    },
  },
  {
    path: 'rect',
    meta: {
      icon: '',
      title: 'Rect',
    },
  },
];
nextTick(() => {
  useSortable(appRef, menuList, {
    animation: 200,
  });
});
const select = (item: MenuItem) => {
  selected.value = item.path;
};
</script>

<style lang="scss" scoped>
@import './apps.scss';
</style>
