<template>
  <div class="notice-table">
    <TableHead title="Notice management">
      <a-button @click="createNotice">
        <PlusOutlined />
      </a-button>
    </TableHead>
    <SystemTable
      :columns="noticeColumns"
      :query="noticeQuery"
      :table="noticeTable"
      v-model:selected-keys="noticeKeys"
    >
      <template v-slot="{ value }">
        <template v-if="value.column.key === 'operation'">
          <Operation :items="operationList" @edit="editNotice(value.record.noticeId)" />
        </template>
      </template>
    </SystemTable>
  </div>
</template>

<script setup lang="ts">
import Operation from '@/views/components/table/Operation.vue';
import SystemTable from '@/views/components/table/SystemTable.vue';

import { resetMenuForm } from '../../menu/form/data';
import { noticeColumns } from '../data/column';
import { editNotice, noticeList } from '../data/curd';
import { showNoticeForm } from '../data/form';
import { noticeKeys, noticeQuery, noticeTable, operationList } from '../data/table';

onMounted(() => {
  noticeList();
});

const createNotice = () => {
  resetMenuForm();
  showNoticeForm.value = true;
};
</script>

<style lang="scss" scoped></style>
