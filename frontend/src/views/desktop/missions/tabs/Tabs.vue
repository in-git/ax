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
            <img :draggable="false" :src="item.icon" @error="onError(item)" />
            <div class="title px-4">{{ item.title }}</div>
            <close-outlined class="close" @click="closeWindow(item.id || '')" />
          </li>
        </a-tooltip>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import logoPng from '@/assets/logo.png';
import { closeWindow, currentWindow, toTop, windowList } from '@/global/config/window';
import type { SystemWindow } from '@/types/system';
import { useSortable } from '@vueuse/integrations/useSortable';
import { tabContextmenu } from './data';
const tabRef = ref();

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
const onError = (item: SystemWindow) => {
  item.icon = logoPng;
};
</script>

<style lang="scss" scoped>
@import './style';
</style>
