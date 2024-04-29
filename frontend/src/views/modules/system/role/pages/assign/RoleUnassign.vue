<template>
  <div>
    <SystemModal
      w="90%"
      h="90%"
      v-model:visible="unAssignModal"
      title="取消授权"
      @update:visible="unAssignModal = false"
    >
      <div>
        <a-card title="取消授权" :body-style="{ overflow: 'auto' }">
          <template #extra>
            <div>
              <a-input-search
                v-model:value="userQuery.userName"
                placeholder="请输入用户名"
                allow-clear
                @search="unassignUsers"
              ></a-input-search>
            </div>
          </template>
        </a-card>
        <div class="py-8 px-12 flex justify-between">
          <a-button
            type="primary"
            :disabled="userData.selectedKeys.length === 0"
            @click="unassign()"
            danger
          >
            批量取消
          </a-button>
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
                  <a-button type="link" style="color: #fc6d6d" @click="unassign(record.userId)">
                    取消授权
                  </a-button>
                </a-tooltip>
              </template>
            </template>
          </a-table>
        </div>
      </div>
    </SystemModal>
  </div>
</template>

<script setup lang="ts">
import SystemModal from '@/components/modal/SysModal.vue';
import { formatColumns } from '@/utils/table/table';
import type { PaginationProps } from 'ant-design-vue/es/pagination';
import { userColumns } from './columns';
import {
  loading,
  onChange,
  unassign,
  unAssignModal,
  unassignUsers,
  userData,
  userQuery,
} from './data';

const pageChange = (page: PaginationProps) => {
  userQuery.value.pageNum = page.current!;
  userQuery.value.pageSize = page.pageSize!;
  unassignUsers();
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
