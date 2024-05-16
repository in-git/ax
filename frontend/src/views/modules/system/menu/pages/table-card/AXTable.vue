
<template>
  <a-card :style="{ boxShadow: 'none' }" :bordered="false" :bodyStyle="{ padding: '0' }">
    <a-table
      @change="pageChange"
      table-layout="fixed"
      sticky
      :row-selection="{
        selectedRowKeys: menuKeys,
        onChange: (k: any[]) => (menuKeys = k),
      }"
      bordered
      :loading="menuTable.loading"
      :pagination="false"
      :customRow="customRow"
      :rowKey="menuTable.rowKey"
      :columns="formatColumns(menuColumns)"
      :data-source="menuTable.data"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'operation'">
          <a-dropdown-button trigger="click"
          @click="menuEdit(record.menuId)"
          @open-change="openChange(record as SystemMenu)">
            <EditOutlined />
            <template #overlay>
              <a-menu>
                 <div v-perm="'system:menu:export'">
                    <a-menu-item @click="menuExport">
                      <template #icon>
                        <ExportOutlined />
                      </template>
                      导出
                    </a-menu-item>
                 </div>
                 <div v-perm="'system:notice:remove'">
                    <a-menu-item @click="menuDelete(record.menuId)">
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
import type { SystemMenu } from '@/api/modules/system/menu/types';
import { formatColumns } from '@/utils/table/table';
import { useArrayFilter } from '@vueuse/core';
import type { TablePaginationConfig } from 'ant-design-vue';
import type { FilterValue, SorterResult } from 'ant-design-vue/es/table/interface';
import { menuColumns } from '../../data/column';
import { menuEdit,menuDelete,menuExport } from '../../data/curd';
import { menuForm } from '../../data/form';
import { menuKeys,  menuQuery, menuTable } from '../../data/table';
import { useCloned } from '@vueuse/core';

const openChange = (record: SystemMenu) => {
  menuForm.value = useCloned(record).cloned.value;
};

/* 行事件 */
const customRow = (record: SystemMenu) => {
  return {
    onClick() {
      const id= (record as any)[menuTable.value.rowKey]
      menuForm .value = record;
      if (!menuKeys.value.includes(id)) {
         menuKeys.value.push(id);
      } else {
         menuKeys.value = useArrayFilter(menuKeys.value, e => e !== id).value;
     }
     menuKeys.value = [record.menuId];
    },
    onDblclick() {
       menuEdit(record.menuId);
    },
  };
};

/* 分页事件触发 */
const pageChange = (
  pagination: TablePaginationConfig,
  filters: Record<string, FilterValue>,
  sorter: SorterResult<SystemMenu> | SorterResult<SystemMenu>[],
) => {
  menuQuery.value.pageNum = pagination.current!;
  menuQuery.value.pageSize = pagination.pageSize!;
};
</script>

<style lang="scss" scoped></style>
