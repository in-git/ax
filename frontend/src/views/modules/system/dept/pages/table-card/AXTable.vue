<template>
  <a-card :style="{ boxShadow: 'none' }" :bordered="false" :bodyStyle="{ padding: '0' }">
    <a-table
      @change="pageChange"
      table-layout="fixed"
      sticky
      :row-selection="{
        selectedRowKeys: deptKeys,
        onChange: (k: any[]) => (deptKeys = k),
      }"
      bordered
      :loading="deptTable.loading"
      :pagination="false"
      :customRow="customRow"
      :rowKey="deptTable.rowKey"
      :columns="formatColumns(deptColumns)"
      :data-source="deptTable.data"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'operation'">
          <a-dropdown-button
            trigger="click"
            @click="deptEdit(record.deptId)"
            @open-change="openChange(record as SystemDept)"
          >
            <EditOutlined />
            <template #overlay>
              <a-menu>
                <div v-perm="'system:notice:add'">
                  <a-menu-item @click="createSubDept(record.deptId)">
                    <template #icon>
                      <PlusOutlined />
                    </template>
                    子菜单
                  </a-menu-item>
                </div>
                <div v-perm="'system:notice:remove'">
                  <a-menu-item @click="deptDelete(record.deptId)">
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
import type { SystemDept } from '@/api/modules/system/dept/types';
import { formatColumns } from '@/utils/table/table';
import { useArrayFilter, useCloned } from '@vueuse/core';
import type { TablePaginationConfig } from 'ant-design-vue';
import type { FilterValue, SorterResult } from 'ant-design-vue/es/table/interface';
import { deptColumns } from '../../data/column';
import { createSubDept, deptDelete, deptEdit } from '../../data/curd';
import { deptForm } from '../../data/form';
import { deptKeys, deptQuery, deptTable } from '../../data/table';

const openChange = (record: SystemDept) => {
  deptForm.value = useCloned(record).cloned.value;
};

/* 行事件 */
const customRow = (record: SystemDept) => {
  return {
    onClick() {
      const id = (record as any)[deptTable.value.rowKey];
      deptForm.value = record;
      if (!deptKeys.value.includes(id)) {
        deptKeys.value.push(id);
      } else {
        deptKeys.value = useArrayFilter(deptKeys.value, e => e !== id).value;
      }
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
