<template>
  <a-card :style="{ boxShadow: 'none' }" :body-style="{ padding: '0' }">
    <a-table
      @change="pageChange"
      table-layout="fixed"
      sticky
      :row-selection="{
        selectedRowKeys: websiteKeys,
        onChange: (k: any[]) => (websiteKeys = k),
      }"
      bordered
      :pagination="false"
      :customRow="customRow"
      :rowKey="websiteTable.rowKey"
      :columns="formatColumns(websiteColumns)"
      :data-source="websiteTable.data"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'operation'">
          <Operation
            :loading="websiteTable.loading"
            @open-change="openChange(record as any)"
            @on-click="websiteEdit(record.websiteId)"
            :items="websiteOperationList"
          />
        </template>
      </template>
    </a-table>
  </a-card>
</template>

<script setup lang="ts">
import type { SystemWebsite } from '@/api/modules/system/website/types';
import { formatColumns } from '@/utils/table/table';
import Operation from '@/views/components/table/Operation.vue';
import type { TablePaginationConfig } from 'ant-design-vue';
import type { FilterValue, SorterResult } from 'ant-design-vue/es/table/interface';
import { websiteColumns } from '../../data/column';
import { websiteEdit } from '../../data/curd';
import { websiteForm } from '../../data/form';
import { websiteKeys, websiteOperationList, websiteQuery, websiteTable } from '../../data/table';

const openChange = (record: SystemWebsite) => {
  websiteForm.value = record;
};

/* 行事件 */
const customRow = (record: SystemWebsite) => {
  return {
    onClick() {
      websiteKeys.value = [record.websiteId];
    },
    onDblclick() {
      websiteEdit(record.websiteId);
    },
  };
};

/* 分页事件触发 */
const pageChange = (
  pagination: TablePaginationConfig,
  filters: Record<string, FilterValue>,
  sorter: SorterResult<SystemWebsite> | SorterResult<SystemWebsite>[],
) => {
  websiteQuery.value.pageNum = pagination.current!;
  websiteQuery.value.pageSize = pagination.pageSize!;
};
</script>

<style lang="scss" scoped></style>
