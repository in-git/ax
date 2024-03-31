<template>
  <div>
    <TableHeadVue />
    <SystemTable
      :columns="onlineColumns"
      :table="onlineTable"
      v-model:query="onlineQuery"
      v-model:selected-keys="onlineKeys"
      @reload="onlineList"
    >
      <template v-slot="{ value }">
        <template v-if="value.column.dataIndex === 'operation'">
          <a-button type="text" danger @click="logout(value.record.tokenId)">
            <LogoutOutlined />
          </a-button>
        </template>
        <template v-else-if="value.column.dataIndex === 'loginTime'">
          {{ useDateFormat(value.record.loginTime, 'YYYY-MM-DD HH:mm:ss').value }}
        </template>
      </template>
    </SystemTable>
  </div>
</template>

<script setup lang="ts">
import SystemTable from '@/views/components/table/SystemTable.vue';
import TableHeadVue from './table-head/head.vue';

import { forceLogout } from '@/api/modules/monitor/online/online';
import type { LogoutOutlined } from '@ant-design/icons-vue';
import { useDateFormat } from '@vueuse/core';
import { Modal } from 'ant-design-vue';
import { onlineColumns } from '../data/column';
import { onlineList } from '../data/curd';
import { onlineKeys, onlineQuery, onlineTable } from '../data/table';

const logout = (id: string) => {
  Modal.confirm({
    title: '提示',
    content: '确定要强制下线吗？',
    okText: '确定',
    cancelText: '取消',
    centered: true,
    onOk: () => {
      forceLogout(id).then(() => {
        onlineList();
      });
    },
  });
};
onMounted(() => {
  onlineList();
});
</script>

<style lang="scss" scoped></style>
