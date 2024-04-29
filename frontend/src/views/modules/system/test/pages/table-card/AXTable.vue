<template>
  <a-card :style="{ boxShadow: 'none' }" :bordered="false" :bodyStyle="{ padding: '0' }">
    <a-table
      @change="pageChange"
      table-layout="fixed"
      sticky
      @resizeColumn="handleResizeColumn"
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
import { toLine } from '@/utils/common/format';
import { formatColumns } from '@/utils/table/table';
import { useArrayFilter } from '@vueuse/core';
import type { TablePaginationConfig } from 'ant-design-vue';
import { testColumns } from '../../data/column';
import { testEdit, testExport, testList } from '../../data/curd';
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

/* 拖拽列 */
const handleResizeColumn = (w: number, col: any) => {
  col.width = w;
};

/* 分页事件触发 */
const pageChange = async (page: TablePaginationConfig, filters: any, sorter: any) => {
  if (page.current && page.pageSize) {
    testQuery.value.pageNum = page.current;
    testQuery.value.pageSize = page.pageSize;
  }
  if (sorter && sorter.order) {
    testQuery.value.orderByColumn = toLine(sorter.columnKey);
    testQuery.value.isAsc = sorter.order.includes('asc') ? 'asc' : 'desc';
  }
  await testList();
};
</script>

<style lang="scss" scoped></style>
