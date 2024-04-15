<template>
  <a-card :style="{ boxShadow: 'none' }">
    <a-table
      @change="pageChange"
      table-layout="fixed"
      sticky
      :row-selection="{
        selectedRowKeys: deptKeys,
        onChange: (k: any[]) => (deptKeys = k),
      }"
      :pagination="false"
      :customRow="customRow"
      :rowKey="deptTable.rowKey"
      :columns="formatColumns(deptColumns)"
      :data-source="deptTable.data"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'operation'">
          <Operation
            :loading="deptTable.loading"
            @open-change="openChange(record as any)"
            @edit="deptEdit(record.configId)"
            :items="deptOperationList"
          />
        </template>
      </template>
    </a-table>
  </a-card>
</template>

<script setup lang="ts">
import type { SystemDept } from '@/api/modules/system/dept/types';
import { formatColumns } from '@/utils/table/table';
import Operation from '@/views/components/table/Operation.vue';
import type { TablePaginationConfig } from 'ant-design-vue';
import type { FilterValue, SorterResult } from 'ant-design-vue/es/table/interface';
import { deptColumns } from '../../data/column';
import { deptEdit } from '../../data/curd';
import { deptForm } from '../../data/form';
import { deptKeys, deptOperationList, deptQuery, deptTable } from '../../data/table';

const openChange = (record: SystemDept) => {
  deptForm.value = record;
};

/* 行事件 */
const customRow = (record: SystemDept) => {
  return {
    onClick() {
     deptKeys.value = [record.deptId];

    },
    onDblclick() {
      deptEdit(record.deptId);
    },
  };
};

/* 分页事件触发 */
const pageChange = (
  pagination: TablePaginationConfig,
  filters: Record<string, FilterValue>,
  sorter: SorterResult<SystemDept> | SorterResult<SystemDept>[],
) => {
  deptQuery.value.pageNum = pagination.current!;
  deptQuery.value.pageSize = pagination.pageSize!;
};
</script>

<style lang="scss" scoped></style>
