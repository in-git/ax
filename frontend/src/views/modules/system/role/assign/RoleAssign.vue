<template>
  <div>
    <SystemModal
      w="90%"
      h="90%"
      v-model:visible="allocateUserModal"
      title="【新增|取消】授权"
      @update:visible="allocateUserModal = false"
    >
      <div>
        <a-card :title="modeConfig.title" :body-style="{ overflow: 'auto' }">
          <template #extra>
            <div>
              <a-input-search placeholder="请输入身份名"></a-input-search>
            </div>
          </template>
        </a-card>
        <div class="py-8 px-12 flex justify-between">
          <template v-if="modeConfig.mode !== 'unassign'">
            <a-button
              :disabled="userData.selectedKeys.length === 0"
              type="primary"
              @click="assign()"
            >
              批量授权
            </a-button>
          </template>
          <template v-else>
            <a-button
              type="primary"
              :disabled="userData.selectedKeys.length === 0"
              @click="unassign()"
              danger
            >
              批量取消
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
            row-key="userId"
          >
            <template #bodyCell="{ column, record }">
              <template v-if="column.dataIndex === 'operation'">
                <template v-if="modeConfig.mode === 'unassign'">
                  <a-tooltip title="">
                    <a-button type="link" style="color: #fc6d6d" @click="unassign(record.userId)">
                      取消授权
                    </a-button>
                  </a-tooltip>
                </template>
                <template v-else>
                  <a-tooltip title="">
                    <a-button type="link" style="color: green" @click="assign(record.userId)">
                      授权
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
