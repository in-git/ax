<template>
  <a-table
    @change="pageChange"
    table-layout="fixed"
    sticky
    :pagination="{
      pageSize: dbQuery.pageSize,
      current: dbQuery.pageNum,
      total: dbQuery.total,
    }"
    :row-selection="{
      selectedRowKeys: dbKeys,
      onChange,
    }"
    :custom-row="customRow"
    :rowKey="dbTable.rowKey"
    :columns="formatColumns(dbColumns)"
    :data-source="dbTable.data"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'operation'">
        <a-button type="ghost" @click="importDb(record.tableName)">
          <DownloadOutlined />
        </a-button>
      </template>
    </template>
  </a-table>
</template>

<script setup lang="ts">
import { formatColumns } from '@/utils/table/table';
import type { TablePaginationConfig } from 'ant-design-vue/es/table/Table';
import { dbColumns } from '../data/column';
import { dbList, importDb } from '../data/curd';
import { dbKeys, dbQuery, dbTable } from '../data/table';

const pageChange = (pagination: TablePaginationConfig) => {
  if (pagination.current && pagination.pageSize) {
    dbQuery.value.pageNum = pagination.current;
    dbQuery.value.pageSize = pagination.pageSize;
    dbList();
  }
};
const onChange = (keys: any[]) => {
  dbKeys.value = keys;
};

const customRow = (record: any) => {
  return {
    onClick() {
      if (!dbKeys.value.includes(record.tableName)) {
        dbKeys.value = [record.tableName];
      }
    },
  };
};
</script>

<style lang="scss" scoped></style>
