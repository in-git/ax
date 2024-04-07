<template>
  <div class="folder system-module">
    <div class="folder-head px-12">
      <a-button type="primary" :disabled="!current" @click="openApp(current!)">打开</a-button>
      <div class="flex gc-12 align-center">
        <a-popover trigger="click" title="图标大小调整" placement="bottom">
          <a-button>
            <SettingOutlined />
            设置
          </a-button>

          <template #content>
            <a-segmented
              v-model:value="folderStore.$state.size"
              :options="sizeOptions"
              block
            ></a-segmented>
          </template>
        </a-popover>
        <div class="text-999">
          数量:
          <a-tag>{{ data.length }}</a-tag>
        </div>
      </div>
    </div>
    <ul class="p-12" ref="ulRef">
      <li
        v-for="(item, key) in props.data"
        :key="key"
        @dblclick="openApp(item)"
        @click="selectItem(item)"
        :class="{ active: item.name === current?.name }"
        :style="style"
      >
        <div v-if="item.meta.link">
          <img
            ref="imageRef"
            :src="`https://favicon.qqsuu.cn/${item.meta.link}`"
            @error="onError(key)"
            :draggable="false"
            width="36"
          />
        </div>
        <div class="logo" v-else>
          <img :src="getIconByName(item) || logoPng" :draggable="false" width="36" />
        </div>
        <div class="title">{{ item.meta.title }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { Routers } from '@/api/modules/system/user/types';
import logoPng from '@/assets/logo.png';
import { getIconByName, openApp } from '@/views/desktop/apps/data';
import type { CSSProperties } from 'vue';
import useFolderStore from './store/folder';

const imageRef = ref<HTMLImageElement[]>();
const sizeOptions = [
  {
    value: 74,
    label: '小',
  },
  {
    value: 84,
    label: '中',
  },
  {
    value: 94,
    label: '大',
  },
];

const onError = (key: number) => {
  nextTick(() => {
    if (!imageRef.value) return;
    imageRef.value[key].src = logoPng;
  });
};
const current = ref<Routers>();
const ulRef = ref();

const folderStore = useFolderStore();

const selectItem = (item: Routers) => {
  current.value = item;
};

const props = defineProps<{
  data: Routers[];
}>();

const style = computed((): CSSProperties => {
  return {
    width: `${folderStore.$state.size}px`,
    height: `${folderStore.$state.size}px`,
  };
});
</script>

<style lang="scss" scoped>
@import './style';
</style>
