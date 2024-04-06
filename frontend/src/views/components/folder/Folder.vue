<template>
  <div class="folder system-module">
    <div class="folder-head px-12">
      <a-button type="primary" :disabled="!current" @click="openApp(current!)">打开</a-button>
      <div class="flex gc-12 align-center">
        <a-popover trigger="click" title="图标大小调整" placement="bottom">
          <div class="system-icon">
            <SettingOutlined class="m-4" />
            设置
          </div>

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
          <img :src="`https://favicon.qqsuu.cn/${item.meta.link}`" :draggable="false" width="36" />
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
.folder {
  background-color: white;
  ul {
    display: flex;
    gap: 12px;
  }
  li {
    text-align: center;
    cursor: pointer;
    width: 74px;
    height: 74px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border: 1px solid transparent;
    user-select: none !important;
    border-radius: var(--radius);
    background-color: #f8f8f8;
    &:hover {
      background: #eee;
    }
    .title {
      color: black;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  li.active {
    border: 1px solid #8db1e4;
    background: #8db1e423;
  }
  .folder-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
  }
}
</style>
