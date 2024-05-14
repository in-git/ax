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
          <a-dropdown-button trigger="click" @click="editCode(record.tableId)">
            <EditOutlined />
            <template #overlay>
              <a-menu>
                <div>
                  <a-menu-item @click="synchDb(record.tableName)">同步</a-menu-item>
                  <a-menu-item @click="downloadCode">下载</a-menu-item>
                  <a-menu-item @click="deleteTable(record.tableId)">删除</a-menu-item>
                </div>
              </a-menu>
            </template>
          </a-dropdown-button>
        </template>
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
import TableHeadVue from './head.vue';

import { synchDb } from '@/api/modules/tool/gen/gen';

import { formatColumns } from '@/utils/table/table';
import type { TablePaginationConfig } from 'ant-design-vue';
import { codeColumns } from '../data/column';
import { codeList, deleteTable, downloadCode, editCode } from '../data/curd';
import { codeKeys, codeQuery, codeTable } from '../data/table';

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
      }
    },
  };
};

onMounted(() => {
  codeList();
});
</script>

<style lang="scss" scoped></style>
