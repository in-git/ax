<template>
  <div>
    <TableHeadVue />
    <a-table
      @change="pageChange"
      table-layout="fixed"
      sticky
      :pagination="{
        pageSize: codeQuery.pageSize,
        current: codeQuery.pageNum,
        total: codeQuery.total,
      }"
      :row-selection="{
        selectedRowKeys: codeKeys,
        onChange,
      }"
      :custom-row="customRow"
      :rowKey="codeTable.rowKey"
      :columns="formatColumns(codeColumns)"
      :data-source="codeTable.data"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'operation'">
          <Operation
            :loading="codeTable.loading"
            @open-change="openChange(record as any)"
            @on-click="editCode(record.tableId)"
            :items="codeOperationList"
          />
        </template>
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
import TableHeadVue from './head.vue';

import { formatColumns } from '@/utils/table/table';
import Operation from '@/views/components/table/Operation.vue';
import { useArrayFilter } from '@vueuse/core';
import type { TablePaginationConfig } from 'ant-design-vue';
import { codeColumns } from '../data/column';
import { codeList, editCode } from '../data/curd';
import { currentCode } from '../data/form';
import { codeKeys, codeOperationList, codeQuery, codeTable } from '../data/table';

const openChange = (data: SystemCode) => {
  currentCode.value = data;
};
const pageChange = (pagination: TablePaginationConfig) => {
  codeQuery.value.pageNum = pagination.current!;
  codeQuery.value.pageSize = pagination.pageSize!;
  codeList();
};
const onChange = (keys: any[]) => {
  codeKeys.value = keys;
};

const customRow = (record: SystemCode) => {
  return {
    onClick() {
      if (!codeKeys.value.includes(record.tableName)) {
        codeKeys.value.push(record.tableName);
      } else {
        codeKeys.value = useArrayFilter(codeKeys.value, e => e !== record.tableName).value;
      }
    },
  };
};

onMounted(() => {
  codeList();
});
</script>

<style lang="scss" scoped></style>
