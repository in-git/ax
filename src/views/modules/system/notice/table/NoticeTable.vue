<template>
  <div class="notice-table">
    <TableHead title="Notice management">
      <div class="flex justify-between align-center">
        <a-button @click="createNotice">
          <PlusOutlined />
        </a-button>
        <FiledVue v-model:columns="noticeColumns" :module-name="noticeTable.moduleName" />
      </div>
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
        <template v-else-if="value.column.key === 'noticeType'">
          {{ getLabel(noticeTypeOptions, value.record.noticeType) }}
        </template>
      </template>
    </SystemTable>
  </div>
</template>

<script setup lang="ts">
import { getLabel } from '@/utils/common/utils';
import FiledVue from '@/views/components/table/Field.vue';
import Operation from '@/views/components/table/Operation.vue';
import SystemTable from '@/views/components/table/SystemTable.vue';
import { resetMenuForm } from '../../menu/form/data';
import { noticeColumns } from '../data/column';
import { editNotice, noticeList } from '../data/curd';
import { showNoticeForm } from '../data/form';
import { noticeTypeOptions } from '../data/options';
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
