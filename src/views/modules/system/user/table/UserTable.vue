<template>
  <div class="flex-1 pt-8 px-8">
    <UserTableHead />
    <a-table
      class="px-12"
      :columns="columns"
      :dataSource="userConfig.data"
      :loading="userConfig.loading"
      @change="pageChange"
      sticky
      :row-selection="{
        selectedRowKeys: userConfig.selectedKeys,
        onChange,
      }"
      :customRow="customRow"
      rowKey="userId"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'operation'">
          <a-dropdown-button @click="editUserConfig(record.userId)">
            Edit

            <template #overlay>
              <a-menu>
                <a-menu-item class="text-danger" @click="delUser(record.userId)">
                  <template #icon>
                    <DeleteOutlined />
                  </template>
                  Delete
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown-button>
        </template>
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
import type { SystemMenu } from '@/api/modules/system/menu/types';
import type { UserProfileData } from '@/api/modules/system/user/types';
import { DeleteOutlined } from '@ant-design/icons-vue';
import type { TablePaginationConfig } from 'ant-design-vue';
import type { Key } from 'ant-design-vue/es/_util/type';
import type { FilterValue, SorterResult } from 'ant-design-vue/es/table/interface';
import userColumns from './columns';
import { delUser, editUserConfig } from './curd';
import { loadUserData, userConfig, userQuery } from './data';
import UserTableHead from './UserTableHead.vue';

onMounted(() => {
  loadUserData();
});
const onChange = (keys: Key[]) => {
  // userConfig.value.selectedKeys = keys.map(e => `${e}`);
  userConfig.value.selectedKeys = keys.map(e => Number(e));
};
const customRow = (record: UserProfileData) => {
  return {
    onClick() {
      userConfig.value.selectedKeys = [Number(record.userId)];
    },
  };
};
const pageChange = (
  pagination: TablePaginationConfig,
  filters: Record<string, FilterValue>,
  sorter: SorterResult<SystemMenu> | SorterResult<SystemMenu>[],
) => {
  userQuery.value.pageNum = pagination.current;
  userQuery.value.pageSize = pagination.pageSize;
  if (sorter instanceof Array) {
    return;
  }
  if (sorter.columnKey) {
    userQuery.value.orderByColumn = `${sorter.columnKey}`;
  }
};
const columns = userColumns.map(e => {
  e.ellipsis = true;
  e.key = `${e.dataIndex}`;
  return e;
});
</script>

<style lang="scss" scoped></style>
