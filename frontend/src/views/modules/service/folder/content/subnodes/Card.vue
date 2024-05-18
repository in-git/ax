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
import { selectionKeys } from '@/components/selection/data';
import { openFile, selectItem } from '../../data/action';
import { currentFolder, folderLoading, selectedFolders } from '../../data/data';
import FileRender from './FileRender.vue';

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
    margin: 0;
    overflow-y: hidden;
    text-align: center;
    border-radius: var(--radius);
    border: 1px solid transparent;
    &:hover {
      background-color: var(--color-primary-hover-bg);
      cursor: pointer;
    }
  }
  .folder-title {
    white-space: wrap;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; //需要裁剪的行数
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin: 0 4px;
    line-height: 16px;
  }
  .active {
    border: 1px solid var(--primary);
  }
}

:deep(.ant-card) {
  box-shadow: none;
}
</style>
