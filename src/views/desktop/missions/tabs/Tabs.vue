<template>
  <div class="bottom-tabs flex align-center">
    <ul ref="tabRef" class="flex">
      <template v-for="item in windowList" :key="item.id">
        <a-tooltip :title="item.title">
          <li
            class="flex flex-s"
            @contextmenu="tabContextmenu(item)"
            :class="[
              { active: currentWindow && currentWindow.id === item.id },
              item.hidden ? 'hidden' : '',
            ]"
            @click="selectItem(item)"
          >
            <img :draggable="false" :src="getIcon(`${item.id}`)" />
            <span class="title px-4">{{ item.title }}</span>
            <close-outlined class="close" @click="closeWindow(item.id || '')" />
          </li>
        </a-tooltip>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import folder from '@/assets/system/folder.png';
import { closeWindow, currentWindow, toTop, windowList } from '@/global/config/window';
import type { SystemWindow } from '@/types/system';
import { useSortable } from '@vueuse/integrations/useSortable';
import { tabContextmenu } from './data';

const tabRef = ref();
const getIcon = (id: string) => {
  const href = new URL(`../../../../assets/system/${id.toLocaleLowerCase()}.png`, import.meta.url)
    .href;
  return !href.includes('undefined') ? href : folder;
};

const selectItem = (item: SystemWindow) => {
  currentWindow.value = item;
  toTop(item.id!);
  item.hidden = !item.hidden;
};
nextTick(() => {
  useSortable(tabRef, windowList, {
    animation: 200,
  });
});
</script>

<style lang="scss" scoped>
@import './style';
</style>
