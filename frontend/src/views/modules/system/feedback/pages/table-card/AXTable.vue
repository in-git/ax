<template>
  <a-card :style="{ boxShadow: 'none' }" :bordered="false" :bodyStyle="{ padding: '0' }">
    <a-table
      @change="pageChange"
      table-layout="fixed"
      sticky
      :row-selection="{
        selectedRowKeys: feedbackKeys,
        onChange: (k: any[]) => (feedbackKeys = k),
      }"
      bordered
      :loading="feedbackTable.loading"
      :pagination="false"
      :customRow="customRow"
      :rowKey="feedbackTable.rowKey"
      :columns="formatColumns(feedbackColumns)"
      :data-source="feedbackTable.data"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'operation'">
          <a-dropdown-button
            trigger="click"
            @click="feedbackEdit(record.feedbackId)"
            @open-change="openChange(record as SystemFeedback)"
          >
            <EditOutlined />
            <template #overlay>
              <a-menu :items="feedbackOperationList"></a-menu>
            </template>
          </a-dropdown-button>
        </template>
      </template>
    </a-table>
  </a-card>
</template>

<script setup lang="ts">
import type { SystemFeedback } from '@/api/modules/system/feedback/types';
import { formatColumns } from '@/utils/table/table';
import { useArrayFilter } from '@vueuse/core';
import type { TablePaginationConfig } from 'ant-design-vue';
import type { FilterValue, SorterResult } from 'ant-design-vue/es/table/interface';
import { feedbackColumns } from '../../data/column';
import { feedbackEdit } from '../../data/curd';
import { feedbackForm } from '../../data/form';
import {
  feedbackKeys,
  feedbackOperationList,
  feedbackQuery,
  feedbackTable,
} from '../../data/table';

const openChange = (record: SystemFeedback) => {
  feedbackForm.value = record;
};

/* 行事件 */
const customRow = (record: SystemFeedback) => {
  return {
    onClick() {
      const id = (record as any)[feedbackTable.value.rowKey];
      if (!feedbackKeys.value.includes(id)) {
        feedbackKeys.value.push(id);
      } else {
        feedbackKeys.value = useArrayFilter(feedbackKeys.value, e => e !== id).value;
      }
      feedbackKeys.value = [record.feedbackId];
    },
    onDblclick() {
      feedbackEdit(record.feedbackId);
    },
  };
};

/* 分页事件触发 */
const pageChange = (
  pagination: TablePaginationConfig,
  filters: Record<string, FilterValue>,
  sorter: SorterResult<SystemFeedback> | SorterResult<SystemFeedback>[],
) => {
  feedbackQuery.value.pageNum = pagination.current!;
  feedbackQuery.value.pageSize = pagination.pageSize!;
};
</script>

<style lang="scss" scoped></style>
