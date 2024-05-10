<template>
  <div class="card">
    <a-card v-if="currentFolder" :loading="folderLoading" :bordered="false">
      <ul>
        <li
          v-for="(item, key) in currentFolder"
          :key="key"
          :class="{ active: selectedFolders.includes(item.key) }"
          @click="selectItem(item)"
          @dblclick="open(item)"
        >
          <FileRender v-bind="item" :width="58" />
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
import type { DataNode } from 'ant-design-vue/es/tree';
import { loadPath, openFile } from '../../data/action';
import {
  currentFolder,
  currentPath,
  folderLoading,
  selectedFolders,
  selectedPaths,
} from '../../data/data';
import FileRender from './FileRender.vue';
const selectItem = (item: DataNode) => {
  selectedFolders.value = [item.key];
};

const open = (item: DataNode) => {
  if (item.type === 'folder') {
    selectedPaths.value = [item.key];
    currentPath.value = `${item.key}`;
    loadPath(`${item.key}`);
  } else {
    openFile(item);
  }
};
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
    margin: 0;
    overflow-y: hidden;
    text-align: center;
    padding: 4px 8px;
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
    text-overflow: ellipsis;
    line-height: 16px;
    display: -webkit-box;
    -webkit-line-clamp: 2; //需要裁剪的行数
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .active {
    border: 1px solid var(--primary);
  }
}

:deep(.ant-card) {
  box-shadow: none;
}
</style>
