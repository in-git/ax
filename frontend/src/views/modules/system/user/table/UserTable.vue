<template>
  <div class="flex-1">
    <UserTableHead />
    <a-card class="mt-8">
      <a-table
        :columns="formatColumns(userColumns)"
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
            <Operation
              :loading="userConfig.loading"
              @open-change="openChange(record as UserProfileData)"
              @on-click="editUserConfig(record.userId)"
              :items="userOperationList"
            />
          </template>
        </template>
      </a-table>
    </a-card>

    <!--  -->
    <ChangePassword />
  </div>
</template>

<script setup lang="ts">
import type { UserProfileData } from '@/api/modules/system/user/types';
import { formatColumns } from '@/utils/table/table';
import Operation from '@/views/components/table/Operation.vue';
import type { TablePaginationConfig } from 'ant-design-vue';
import type { Key } from 'ant-design-vue/es/_util/type';
import type { FilterValue, SorterResult } from 'ant-design-vue/es/table/interface';
import userColumns from '../data/columns';
import { editUserConfig, loadUserData } from '../data/curd';
import { userConfig, userQuery } from '../data/data';
import { userForm } from '../data/form';
import { userOperationList } from '../data/table';
import ChangePassword from './change-password/ChangePassword.vue';
import UserTableHead from './UserTableHead.vue';

const openChange = (record: UserProfileData) => {
  userForm.value = record;
};
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
  sorter: SorterResult<UserProfileData> | SorterResult<UserProfileData>[],
) => {
  userQuery.value.pageNum = pagination.current || 0;
  userQuery.value.pageSize = pagination.pageSize || 0;
  if (sorter instanceof Array) {
    return;
  }
  if (sorter.columnKey) {
    userQuery.value.orderByColumn = `${sorter.columnKey}`;
  }
};
</script>

<style lang="scss" scoped></style>
