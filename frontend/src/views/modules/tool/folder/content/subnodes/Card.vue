<template>
  <div class="card" data-selection-area>
    <a-card
      v-if="currentFolder && currentFolder.length > 0"
      :loading="folderLoading"
      :bordered="false"
    >
      <ul>
        <li
          :data-selection="item.key"
          v-for="(item, key) in currentFolder"
          :key="key"
          :class="{ active: selectedFolders.includes(item.key) }"
          @click="selectItem(item)"
          @dblclick="openFile(item)"
        >
          <div class="flex-1">
            <FileRender v-bind="item" width="58px" />
          </div>

          <div class="folder-title">
            {{ item.title }}
          </div>
        </li>
      </ul>
    </a-card>

    <a-empty v-else />
  </div>
</template>

<script setup lang="ts">
import { selectionKeys } from '@/components/selection/data';
import type { DataNode } from 'ant-design-vue/es/tree';
import { openFile } from '../../data/action';
import { currentFolder, folderLoading, selectedFolders } from '../../data/data';
import FileRender from './FileRender.vue';

const selectItem = (item: DataNode) => {
  selectedFolders.value = [item.key];
};

watch(
  selectionKeys,
  () => {
    selectedFolders.value = Array.from(selectionKeys.value);
  },
  {
    immediate: true,
    deep: true,
  },
);
</script>

<style lang="scss" scoped>
.card {
  height: 100%;
  overflow-y: auto;
}
ul {
  height: 100%;
  overflow-y: auto;
  display: grid;
  padding: 8px;
  margin: 0;
  gap: 4px;
  grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
  grid-auto-rows: min-content;

  place-content: start;
  li {
    width: 100%;
    max-width: 100px;
    height: 92px;
    margin: 0;
    overflow-y: hidden;
    text-align: center;
    border-radius: var(--radius);
    border: 1px solid transparent;
    &:hover {
      background-color: var(--color-primary-hover-bg);
      cursor: pointer;
      .folder-title {
        -webkit-line-clamp: 2; //需要裁剪的行数
      }
    }
  }
  .folder-title {
    white-space: wrap;
    line-height: 16px;
    word-break: break-all;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2; /* 指定最多显示的行数 */
  }
  .active {
    border: 1px solid var(--primary);
  }
}

:deep(.ant-card) {
  box-shadow: none;
}
</style>
