<template>
  <div>
    <TableHeadVue />
    <a-table
      :columns="formatColumns(onlineColumns)"
      :data-source="onlineTable.data"
      :loading="onlineTable.loading"
      class="mt-12"
      :row-key="onlineTable.rowKey"
      @change="pageChange"
    >
      <template #bodyCell="{ record, column }">
        <template v-if="column.dataIndex === 'operation'">
          <a-tooltip title="强制下线">
            <a-button type="text" danger @click="logout(record.tokenId)">
              <LogoutOutlined />
            </a-button>
          </a-tooltip>
        </template>
        <template v-else-if="column.dataIndex === 'loginTime'">
          {{ useDateFormat(record.loginTime, 'YYYY-MM-DD HH:mm:ss').value }}
        </template>
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
import TableHeadVue from './head.vue';

import { forceLogout } from '@/api/modules/monitor/online/online';
import { formatColumns } from '@/utils/table/table';
import type { LogoutOutlined } from '@ant-design/icons-vue';
import { useDateFormat } from '@vueuse/core';
import { Modal, type TablePaginationConfig } from 'ant-design-vue';
import type { FilterValue, SorterResult } from 'ant-design-vue/es/table/interface';
import { onlineColumns } from '../data/column';
import { onlineList } from '../data/curd';
import { onlineQuery, onlineTable } from '../data/table';

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

const pageChange = (
  pagination: TablePaginationConfig,
  filters: Record<string, FilterValue>,
  sorter: SorterResult<any> | SorterResult<any>[],
) => {
  onlineQuery.value.pageNum = pagination.current!;
  onlineQuery.value.pageSize = pagination.pageSize!;
  onlineList();
};
</script>

<style lang="scss" scoped></style>
