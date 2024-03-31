<template>
  <div class="menu-table">
    <MenuHead></MenuHead>
    <a-table
      class="px-12"
      :columns="formatColumns(menuColumns)"
      :dataSource="menuQuery.data"
      :loading="menuQuery.loading"
      @change="pageChange"
      table-layout="fixed"
      sticky
      :row-selection="{
        selectedRowKeys: menuQuery.selectedKeys,
        onChange,
      }"
      :customRow="customRow"
      rowKey="menuId"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'operation'">
          <div class="text-center">
            <a-dropdown-button @click="showMenuFormForm(record.menuId)" trigger="click">
              <template #overlay>
                <a-menu>
                  <a-menu-item key="delete" @click="delMenu(record.menuId)">Delete</a-menu-item>
                </a-menu>
              </template>
              <EditOutlined />
            </a-dropdown-button>
          </div>
        </template>
        <template v-if="column.dataIndex === 'isFrame'">
          <CheckOutlined v-if="record.isFrame === '0'" class="text-green" />
          <CloseOutlined v-else class="text-red" />
        </template>
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
import type { SystemMenu } from '@/api/modules/system/menu/types';
import { formatColumns } from '@/utils/table/table';
import { CheckOutlined, type EditOutlined } from '@ant-design/icons-vue';
import type { TablePaginationConfig } from 'ant-design-vue';
import type { Key } from 'ant-design-vue/es/_util/type';
import type { FilterValue, SorterResult } from 'ant-design-vue/es/table/interface';
import { menuColumns } from './column';
import { delMenu, showMenuFormForm } from './curd';
import { loadMenuData, menuQuery } from './data';
import MenuHead from './head/MenuHead.vue';
onMounted(() => {
  loadMenuData();
});

const pageChange = (
  pagination: TablePaginationConfig,
  filters: Record<string, FilterValue>,
  sorter: SorterResult<SystemMenu> | SorterResult<SystemMenu>[],
) => {
  menuQuery.value.query.pageNum = pagination.current!;
  menuQuery.value.query.pageSize = pagination.pageSize!;
  if (sorter instanceof Array) {
    return;
  }
  if (sorter.columnKey) {
    menuQuery.value.query.orderByColumn = `${sorter.columnKey}`;
  }
  loadMenuData();
};

const onChange = (keys: Key[]) => {
  const lastValue = keys[keys.length - 1];
  if (lastValue) menuQuery.value.selectedKeys = [lastValue];
};
const customRow = (record: SystemMenu) => {
  return {
    onClick() {
      menuQuery.value.selectedKeys = [record.menuId];
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
