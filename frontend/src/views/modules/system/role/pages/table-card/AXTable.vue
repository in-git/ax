<template>
  <a-card :style="{ boxShadow: 'none' }" :bordered="false" :bodyStyle="{ padding: '0' }">
    <a-table
      @change="pageChange"
      table-layout="fixed"
      sticky
      :row-selection="{
        selectedRowKeys: roleKeys,
        onChange: (k: any[]) => (roleKeys = k),
      }"
      bordered
      :loading="roleTable.loading"
      :pagination="false"
      :customRow="customRow"
      :rowKey="roleTable.rowKey"
      :columns="formatColumns(roleColumns)"
      :data-source="roleTable.data"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'operation'">
          <a-dropdown-button
            trigger="click"
            @click="selectRole(record.roleId)"
            @open-change="openChange(record as SystemRole)"
          >
            <EditOutlined />
          </a-dropdown-button>
        </template>
      </template>
    </a-table>
  </a-card>
</template>

<script setup lang="ts">
import type { SystemRole } from '@/api/modules/system/role/types';
import { formatColumns } from '@/utils/table/table';
import { useArrayFilter } from '@vueuse/core';
import type { TablePaginationConfig } from 'ant-design-vue';
import type { FilterValue, SorterResult } from 'ant-design-vue/es/table/interface';
import { roleColumns } from '../../data/column';
import { selectRole } from '../../data/curd';
import { roleForm } from '../../data/form';
import { roleKeys, roleQuery, roleTable } from '../../data/table';

const openChange = (record: SystemRole) => {
  roleForm.value = record;
};

/* 行事件 */
const customRow = (record: SystemRole) => {
  return {
    onClick() {
      const id = (record as any)[roleTable.value.rowKey];
      roleForm.value = record;
      if (!roleKeys.value.includes(id)) {
        roleKeys.value.push(id);
      } else {
        roleKeys.value = useArrayFilter(roleKeys.value, e => e !== id).value;
      }
      if (record.roleId) {
        roleKeys.value = [record.roleId];
      }
    },
    onDblclick() {
      selectRole(record.roleId);
    },
  };
};

/* 分页事件触发 */
const pageChange = (
  pagination: TablePaginationConfig,
  filters: Record<string, FilterValue>,
  sorter: SorterResult<SystemRole> | SorterResult<SystemRole>[],
) => {
  roleQuery.value.pageNum = pagination.current!;
  roleQuery.value.pageSize = pagination.pageSize!;
};
</script>

<style lang="scss" scoped></style>
