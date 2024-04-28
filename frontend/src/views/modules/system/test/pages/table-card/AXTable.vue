<template>
  <a-card :style="{ boxShadow: 'none' }" :bordered="false" :bodyStyle="{ padding: '0' }">
    <a-table
      @change="pageChange"
      table-layout="fixed"
      sticky
      :row-selection="{
        selectedRowKeys: testKeys,
        onChange: (k: any[]) => (testKeys = k),
      }"
      bordered
      :loading="testTable.loading"
      :pagination="false"
      :customRow="customRow"
      :rowKey="testTable.rowKey"
      :columns="formatColumns(testColumns)"
      :data-source="testTable.data"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'operation'">
          <a-dropdown-button
            trigger="click"
            @click="testEdit(record.testId)"
            @open-change="openChange(record as SystemTest)"
          >
            <EditOutlined />
            <template #overlay>
              <a-menu>
                <div v-perm="'system:test:export'">
                  <a-menu-item @click="testExport">
                    <template #icon>
                      <ExportOutlined />
                    </template>
                    导出
                  </a-menu-item>
                </div>
              </a-menu>
            </template>
          </a-dropdown-button>
        </template>
      </template>
    </a-table>
  </a-card>
</template>

<script setup lang="ts">
import type { SystemTest } from '@/api/modules/system/test/types';
import { formatColumns } from '@/utils/table/table';
import { useArrayFilter } from '@vueuse/core';
import type { TablePaginationConfig } from 'ant-design-vue';
import type { FilterValue, SorterResult } from 'ant-design-vue/es/table/interface';
import { testColumns } from '../../data/column';
import { testEdit, testExport } from '../../data/curd';
import { testForm } from '../../data/form';
import { testKeys, testQuery, testTable } from '../../data/table';

const openChange = (record: SystemTest) => {
  testForm.value = record;
};

/* 行事件 */
const customRow = (record: SystemTest) => {
  return {
    onClick() {
      const id = (record as any)[testTable.value.rowKey];
      if (!testKeys.value.includes(id)) {
        testKeys.value.push(id);
      } else {
        testKeys.value = useArrayFilter(testKeys.value, e => e !== id).value;
      }
      testKeys.value = [record.testId];
    },
    onDblclick() {
      testEdit(record.testId);
    },
  };
};

/* 分页事件触发 */
const pageChange = (
  pagination: TablePaginationConfig,
  filters: Record<string, FilterValue>,
  sorter: SorterResult<SystemTest> | SorterResult<SystemTest>[],
) => {
  testQuery.value.pageNum = pagination.current!;
  testQuery.value.pageSize = pagination.pageSize!;
};
</script>

<style lang="scss" scoped></style>
