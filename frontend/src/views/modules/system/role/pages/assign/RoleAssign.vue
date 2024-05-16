<template>
  <div>
    <a-modal
      width="90%"
      v-model:open="allocateUserModal"
      title="管理身份"
      get-container=".SystemRole"
    >
      <div>
        <a-card title="新增授权" :body-style="{ height: '100%' }">
          <template #extra>
            <a-input-search
              v-model:value="userQuery.userName"
              placeholder="请输入用户名"
              allow-clear
              @search="allocateUsers"
            ></a-input-search>
          </template>
        </a-card>
        <div class="py-8 px-12 flex justify-between">
          <template>
            <a-button
              :disabled="userData.selectedKeys.length === 0"
              type="primary"
              @click="assign()"
            >
              批量授权
            </a-button>
          </template>
        </div>
        <div class="user-list p-8">
          <a-table
            :columns="formatColumns(userColumns)"
            :loading="loading"
            :data-source="userData.data"
            :pagination="{
              total: userQuery.total,
              current: userQuery.pageNum,
              pageSize: userQuery.pageSize,
            }"
            :row-selection="{
              selectedRowKeys: userData.selectedKeys,
              onChange,
            }"
            @change="pageChange"
            row-key="userId"
          >
            <template #bodyCell="{ column, record }">
              <template v-if="column.dataIndex === 'operation'">
                <a-tooltip title="">
                  <a-button type="link" style="color: green" @click="assign(record.userId)">
                    授权
                  </a-button>
                </a-tooltip>
              </template>
            </template>
          </a-table>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { formatColumns } from '@/utils/table/table';
import type { PaginationProps } from 'ant-design-vue/es/pagination';
import { userColumns } from './columns';
import {
  allocateUserModal,
  allocateUsers,
  assign,
  loading,
  onChange,
  userData,
  userQuery,
} from './data';

const pageChange = (page: PaginationProps) => {
  userQuery.value.pageNum = page.current!;
  userQuery.value.pageSize = page.pageSize!;
  allocateUsers();
};
</script>

<style lang="scss" scoped>
.allocate-modal {
  position: absolute;
  width: 80%;
  height: 90%;
  border: 1px solid #ddd;
  background: #f8f8f8;
  top: 5%;
  left: 10%;
  box-shadow: 0 0 12px #8080804f;
}
.system__icon {
  &:hover {
    background: #eee;
  }
}
.user-list {
  overflow: auto;
}
</style>
