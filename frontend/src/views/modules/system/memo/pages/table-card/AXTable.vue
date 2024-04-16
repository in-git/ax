<template>
  <a-card :style="{ boxShadow: 'none' }" :bordered="false" :bodyStyle="{ padding: '0' }">
    <a-table
      @change="pageChange"
      table-layout="fixed"
      sticky
      :row-selection="{
        selectedRowKeys: memoKeys,
        onChange: (k: any[]) => (memoKeys = k),
      }"
      :pagination="false"
      :customRow="customRow"
      :rowKey="memoTable.rowKey"
      :columns="formatColumns(memoColumns)"
      :data-source="memoTable.data"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'operation'">
          <Operation
            :loading="memoTable.loading"
            @open-change="openChange(record as SystemMemo)"
            @on-click="memoEdit(record.memoId)"
            :items="memoOperationList"
          />
        </template>
      </template>
    </a-table>
  </a-card>
</template>

<script setup lang="ts">
import type { SystemMemo } from '@/api/modules/system/memo/types';
import { formatColumns } from '@/utils/table/table';
import Operation from '@/views/components/table/Operation.vue';
import type { TablePaginationConfig } from 'ant-design-vue';
import type { FilterValue, SorterResult } from 'ant-design-vue/es/table/interface';
import { memoColumns } from '../../data/column';
import { memoEdit } from '../../data/curd';
import { memoForm } from '../../data/form';
import { memoKeys, memoOperationList, memoQuery, memoTable } from '../../data/table';

const openChange = (record: SystemMemo) => {
  memoForm.value = record;
};

/* 行事件 */
const customRow = (record: SystemMemo) => {
  return {
    onClick() {
      memoKeys.value = [record.memoId];
    },
    onDblclick() {
      memoEdit(record.memoId);
    },
  };
};

/* 分页事件触发 */
const pageChange = (
  pagination: TablePaginationConfig,
  filters: Record<string, FilterValue>,
  sorter: SorterResult<SystemMemo> | SorterResult<SystemMemo>[],
) => {
  memoQuery.value.pageNum = pagination.current!;
  memoQuery.value.pageSize = pagination.pageSize!;
};
</script>

<style lang="scss" scoped></style>
