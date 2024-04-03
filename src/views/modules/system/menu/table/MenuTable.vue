<template>
  <div class="menu-table">
    <MenuHead></MenuHead>
    <SystemTable
      :table="menuTableConfig"
      :columns="menuColumns"
      v-model:query="menuQuery"
      v-model:form="menuForm"
      v-model:selected-keys="menuKeys"
    >
      <template v-slot="{ value }">
        <template v-if="value.column.dataIndex === 'operation'">
          <Operation @edit="editMenu(value.record as any)" :items="menuItems" />
        </template>
        <template v-if="value.column.dataIndex === 'isFrame'">
          <CheckOutlined v-if="value.record.isFrame === '0'" class="text-green" />
          <CloseOutlined v-else class="text-red" />
        </template>
        <template v-else-if="value.column.dataIndex === 'menuType'">
          <a-tag>{{ getLabel(menuTypeOptions, value.record.menuType) }}</a-tag>
        </template>
      </template>
    </SystemTable>
  </div>
</template>

<script setup lang="ts">
import type { SystemMenu } from '@/api/modules/system/menu/types';
import { getLabel } from '@/utils/common/utils';
import Operation from '@/views/components/table/Operation.vue';
import SystemTable from '@/views/components/table/SystemTable.vue';
import { CheckOutlined } from '@ant-design/icons-vue';
import type { TablePaginationConfig } from 'ant-design-vue';
import type { Key } from 'ant-design-vue/es/_util/type';
import type { FilterValue, SorterResult } from 'ant-design-vue/es/table/interface';
import { menuColumns } from '../data/column';
import { editMenu, loadMenuData } from '../data/curd';
import { menuItems, menuKeys, menuQuery, menuTableConfig } from '../data/data';
import { menuForm } from '../data/form';
import { menuTypeOptions } from '../data/options';
import MenuHead from './head/MenuHead.vue';

onMounted(() => {
  loadMenuData();
});

const pageChange = (
  pagination: TablePaginationConfig,
  filters: Record<string, FilterValue>,
  sorter: SorterResult<SystemMenu> | SorterResult<SystemMenu>[],
) => {
  menuQuery.value.pageNum = pagination.current!;
  menuQuery.value.pageSize = pagination.pageSize!;
  if (sorter instanceof Array) {
    return;
  }
  if (sorter.columnKey) {
    menuQuery.value.orderByColumn = `${sorter.columnKey}`;
  }
  loadMenuData();
};

const onChange = (keys: Key[]) => {
  const lastValue = keys[keys.length - 1];
  if (lastValue) menuKeys.value = [Number(lastValue)];
};
const customRow = (record: SystemMenu) => {
  return {
    onClick() {
      menuKeys.value = [record.menuId];
    },
  };
};
</script>

<style lang="scss" scoped>
.text-red {
  color: #ff7676;
}
.menu-table {
  height: calc(100%);
  overflow-y: auto;
}
</style>
../data/data ../data/curd ../data/column
