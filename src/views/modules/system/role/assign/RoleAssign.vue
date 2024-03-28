<template>
  <div>
    <SystemModal
      w="90%"
      h="90%"
      v-model:visible="allocateUserModal"
      title="Role config"
      @update:visible="allocateUserModal = false"
    >
      <div>
        <a-page-header :title="modeConfig.title" class="py-0 page-border px-12" />
        <div class="py-8 px-12 flex justify-between">
          <div>
            <a-input-search placeholder="Please enter name"></a-input-search>
          </div>
          <template v-if="modeConfig.mode === 'unassign'">
            <a-button type="primary" danger>批量授权</a-button>
          </template>
          <template v-else>
            <a-button type="primary" danger>批量取消</a-button>
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
            row-key="userId"
          >
            <template #bodyCell="{ column, record }">
              <template v-if="column.dataIndex === 'operation'">
                <template v-if="modeConfig.mode === 'unassign'">
                  <a-tooltip title="取消授权">
                    <a-button type="link" style="color: #fc6d6d" @click="assign(record.userId)">
                      <img :src="assignPng" width="16" height="16" />
                    </a-button>
                  </a-tooltip>
                </template>
                <template v-else>
                  <a-tooltip title="授权">
                    <a-button type="link" style="color: #fc6d6d" @click="unassign(record.userId)">
                      <img :src="unassignPng" width="16" height="16" />
                    </a-button>
                  </a-tooltip>
                </template>
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
import assignPng from './assign.png';
import { userColumns } from './columns';
import {
  allocateUserModal,
  assign,
  loading,
  modeConfig,
  onChange,
  unassign,
  userData,
  userQuery,
} from './data';
import unassignPng from './unassign.png';
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
.system-icon {
  &:hover {
    background: #eee;
  }
}
</style>
