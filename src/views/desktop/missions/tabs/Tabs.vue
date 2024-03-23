<template>
  <div class="bottom-tabs flex align-center">
    <ul ref="tabRef" class="flex">
      <li
        v-for="item in windowList"
        :key="item.id"
        class="flex flex-s"
        :class="[
          { active: currentWindow && currentWindow.id === item.id },
          item.hidden ? 'hidden' : '',
        ]"
        @click="selectItem(item)"
      >
        <img :draggable="false" :src="getIcon(`${item.id}`)" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { currentWindow, toTop, windowList } from '@/global/config/window';
import type { SystemWindow } from '@/types/system';
import { useSortable } from '@vueuse/integrations/useSortable';

const tabRef = ref();
const getIcon = (id: string) => {
  return new URL(`../../../../assets/system/${id.toLocaleLowerCase()}.png`, import.meta.url).href;
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
