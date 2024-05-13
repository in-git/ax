<template>
  <a-card :style="{ boxShadow: 'none' }" :bordered="false" :bodyStyle="{ padding: '0' }">
    <a-table
      @change="pageChange"
      table-layout="fixed"
      sticky
      :row-selection="{
        selectedRowKeys: typeKeys,
        onChange: (k: any[]) => (typeKeys = k),
      }"
      bordered
      :loading="typeTable.loading"
      :pagination="false"
      :customRow="customRow"
      :rowKey="typeTable.rowKey"
      :columns="formatColumns(typeColumns)"
      :data-source="typeTable.data"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'operation'">
          <a-dropdown-button
            trigger="click"
            @click="typeEdit(record.dictId)"
            @open-change="openChange(record as SystemDict)"
          >
            <EditOutlined />
            <template #overlay>
              <a-menu>
                <div v-perm="'system:type:export'">
                  <a-menu-item @click="typeExport">
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
        <template v-if="column.key === 'dictType'">
          <a-button type="link" @click="editType(record as SystemDict)">
            {{ record.dictType }}
          </a-button>
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
import { typeColumns } from '../../data/column';
import { editType, typeEdit, typeExport } from '../../data/curd';
import { typeForm } from '../../data/form';
import { typeKeys, typeQuery, typeTable } from '../../data/table';

const openChange = (record: SystemDict) => {
  typeForm.value = useCloned(record).cloned.value;
};

/* 行事件 */
const customRow = (record: SystemDict) => {
  return {
    onClick() {
      const id = (record as any)[typeTable.value.rowKey];
      typeForm.value = record;
      if (!typeKeys.value.includes(id)) {
        typeKeys.value.push(id);
      } else {
        typeKeys.value = useArrayFilter(typeKeys.value, e => e !== id).value;
      }
      typeKeys.value = [record.dictId];
    },
    onDblclick() {
      typeEdit(record.dictId);
    },
  };
};

/* 分页事件触发 */
const pageChange = (
  pagination: TablePaginationConfig,
  filters: Record<string, FilterValue>,
  sorter: SorterResult<SystemDict> | SorterResult<SystemDict>[],
) => {
  typeQuery.value.pageNum = pagination.current!;
  typeQuery.value.pageSize = pagination.pageSize!;
};
</script>

<style lang="scss" scoped></style>
