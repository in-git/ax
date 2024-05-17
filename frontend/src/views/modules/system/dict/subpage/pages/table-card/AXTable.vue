<template>
  <a-card :style="{ boxShadow: 'none' }" :bordered="false" :bodyStyle="{ padding: '0' }">
    <a-table
      @change="pageChange"
      table-layout="fixed"
      sticky
      :row-selection="{
        selectedRowKeys: dataKeys,
        onChange: (k: any[]) => (dataKeys = k),
      }"
      bordered
      :loading="dataTable.loading"
      :pagination="false"
      :customRow="customRow"
      :rowKey="dataTable.rowKey"
      :columns="formatColumns(dataColumns)"
      :data-source="dataTable.data"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'operation'">
          <a-dropdown-button
            trigger="click"
            @click="dataEdit(record.dictCode)"
            @open-change="openChange(record as SystemDictData)"
          >
            <EditOutlined />
            <template #overlay>
              <a-menu>
                <div v-perm="'system:data:export'">
                  <a-menu-item @click="dataDelete(record.dictCode)">
                    <template #icon>
                      <DeleteOutlined />
                    </template>
                    删除
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
import { formatColumns } from '@/utils/table/table';
import { useArrayFilter, useCloned } from '@vueuse/core';
import type { TablePaginationConfig } from 'ant-design-vue';
import type { FilterValue, SorterResult } from 'ant-design-vue/es/table/interface';
import { dataColumns } from '../../data/column';
import { dataDelete, dataEdit } from '../../data/curd';
import { dataForm } from '../../data/form';
import { dataKeys, dataQuery, dataTable } from '../../data/table';

const openChange = (record: SystemDictData) => {
  dataForm.value = useCloned(record).cloned.value;
};

/* 行事件 */
const customRow = (record: SystemDictData) => {
  return {
    onClick() {
      const id = (record as any)[dataTable.value.rowKey];
      dataForm.value = record;
      if (!dataKeys.value.includes(id)) {
        dataKeys.value.push(id);
      } else {
        dataKeys.value = useArrayFilter(dataKeys.value, e => e !== id).value;
      }
      dataKeys.value = [record.dictCode];
    },
    onDblclick() {
      dataEdit(record.dictCode);
    },
  };
};

/* 分页事件触发 */
const pageChange = (
  pagination: TablePaginationConfig,
  filters: Record<string, FilterValue>,
  sorter: SorterResult<SystemDictData> | SorterResult<SystemDictData>[],
) => {
  dataQuery.value.pageNum = pagination.current!;
  dataQuery.value.pageSize = pagination.pageSize!;
};
</script>

<style lang="scss" scoped></style>
