<template>
  <a-card :style="{ boxShadow: 'none' }" :bordered="false" :bodyStyle="{ padding: '0' }">
    <a-table
      @change="pageChange"
      table-layout="fixed"
      sticky
      :row-selection="{
        selectedRowKeys: userKeys,
        onChange: (k: any[]) => (userKeys = k),
      }"
      bordered
      :loading="userTable.loading"
      :pagination="false"
      :customRow="customRow"
      :rowKey="userTable.rowKey"
      :columns="formatColumns(userColumns)"
      :data-source="userTable.data"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'operation'">
          <a-dropdown-button
            trigger="click"
            @click="userEdit(record.userId)"
            @open-change="openChange(record as UserProfileData)"
          >
            <EditOutlined />
            <template #overlay>
              <a-menu>
                <div v-perm="'system:user:export'">
                  <a-menu-item @click="userExport">
                    <template #icon>
                      <ExportOutlined />
                    </template>
                    导出
                  </a-menu-item>
                </div>
                <div v-perm="'system:notice:remove'">
                  <a-menu-item @click="userDelete(record.userId)">
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
import type { UserProfileData } from '@/api/modules/system/user/types';
import { formatColumns } from '@/utils/table/table';
import { useArrayFilter, useCloned } from '@vueuse/core';
import type { TablePaginationConfig } from 'ant-design-vue';
import type { FilterValue, SorterResult } from 'ant-design-vue/es/table/interface';
import { userColumns } from '../../data/column';
import { userDelete, userEdit, userExport } from '../../data/curd';
import { userForm } from '../../data/form';
import { userKeys, userQuery, userTable } from '../../data/table';

const openChange = (record: UserProfileData) => {
  userForm.value = useCloned(record).cloned.value;
};

/* 行事件 */
const customRow = (record: UserProfileData) => {
  return {
    onClick() {
      const id = (record as any)[userTable.value.rowKey];
      userForm.value = record;
      if (!userKeys.value.includes(id)) {
        userKeys.value.push(id);
      } else {
        userKeys.value = useArrayFilter(userKeys.value, e => e !== id).value;
      }
      userKeys.value = [record.userId!];
    },
    onDblclick() {
      userEdit(record.userId);
    },
  };
};

/* 分页事件触发 */
const pageChange = (
  pagination: TablePaginationConfig,
  filters: Record<string, FilterValue>,
  sorter: SorterResult<UserProfileData> | SorterResult<UserProfileData>[],
) => {
  userQuery.value.pageNum = pagination.current!;
  userQuery.value.pageSize = pagination.pageSize!;
};
</script>

<style lang="scss" scoped></style>
