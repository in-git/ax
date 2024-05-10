<template>
  <div>
    <a-table
      :dataSource="currentFolder"
      :columns="fileColumns"
      rowKey="key"
      :customRow="customRow"
      :loading="folderLoading"
      :rowSelection="{
        onChange: (k: any[]) => (selectedFolders = k),
        selectedRowKeys: selectedFolders,
      }"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'title'">
          <div>
            <FileRender :width="24" v-bind="{ ...(record as any) }" />
            {{ record.title }}
          </div>
        </template>
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
import type { DataNode } from 'ant-design-vue/es/vc-tree-select/interface';
import { fileColumns } from '../../data/columns';
import { currentFolder, folderLoading, selectedFolders } from '../../data/data';
import FileRender from './FileRender.vue';

/* 行事件 */
const customRow = (record: DataNode) => {
  return {
    onClick() {
      selectedFolders.value = [record.key!];
    },
  };
};
</script>

<style lang="scss" scoped></style>
