<template>
  <a-card :style="{ boxShadow: 'none' }">
    <a-table
      @change="pageChange"
      table-layout="fixed"
      sticky
      :row-selection="{
        selectedRowKeys: postKeys,
        onChange: (k: any[]) => (postKeys = k),
      }"
      :pagination="false"
      :customRow="customRow"
      :rowKey="postTable.rowKey"
      :columns="formatColumns(postColumns)"
      :data-source="postTable.data"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'operation'">
          <Operation
            :loading="postTable.loading"
            @open-change="openChange(record as any)"
            @on-click="postEdit(record.configId)"
            :items="postOperationList"
          />
        </template>
      </template>
    </a-table>
  </a-card>
</template>

<script setup lang="ts">
import type { SystemPost } from '@/api/modules/system/post/types';
import { formatColumns } from '@/utils/table/table';
import Operation from '@/views/components/table/Operation.vue';
import type { TablePaginationConfig } from 'ant-design-vue';
import type { FilterValue, SorterResult } from 'ant-design-vue/es/table/interface';
import { postColumns } from '../../data/column';
import { postEdit } from '../../data/curd';
import { postForm } from '../../data/form';
import { postKeys, postOperationList, postQuery, postTable } from '../../data/table';

const openChange = (record: SystemPost) => {
  postForm.value = record;
};

/* 行事件 */
const customRow = (record: SystemPost) => {
  return {
    onClick() {
      postKeys.value = [record.postId];
    },
    onDblclick() {
      postEdit(record.postId);
    },
  };
};

/* 分页事件触发 */
const pageChange = (
  pagination: TablePaginationConfig,
  filters: Record<string, FilterValue>,
  sorter: SorterResult<SystemPost> | SorterResult<SystemPost>[],
) => {
  postQuery.value.pageNum = pagination.current!;
  postQuery.value.pageSize = pagination.pageSize!;
};
</script>

<style lang="scss" scoped></style>
