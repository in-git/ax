<template>
  <div class="notice-table">
    <TableHead title="Notice management">
      <div class="flex gc-4">
        <a-tooltip title="新建">
          <a-button @click="createNotice" type="primary">
            <PlusOutlined />
          </a-button>
        </a-tooltip>
        <a-button type="text" @click="noticeList">
          <ReloadOutlined />
        </a-button>
      </div>
      <FiledVue v-model:columns="noticeColumns" :module-name="noticeTable.moduleName" />
    </TableHead>
    <SystemTable
      :columns="noticeColumns"
      v-model:query="noticeQuery"
      :table="noticeTable"
      v-model:selected-keys="noticeKeys"
      v-model:form="noticeForm"
    >
      <template v-slot="{ value }">
        <template v-if="value.column.key === 'operation'">
          <Operation
            :items="operationList"
            @open-change="openChange(value.record as any)"
            @edit="editNotice(value.record as any, value.record.noticeId)"
          />
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
import { noticeColumns } from '../data/column';
import { editNotice, noticeList } from '../data/curd';
import { noticeForm, resetNoticeForm, showNoticeForm } from '../data/form';
import { noticeTypeOptions } from '../data/options';
import { noticeKeys, noticeQuery, noticeTable, operationList } from '../data/table';

onMounted(() => {
  noticeList();
});
const openChange = (item: SystemNotice) => {
  noticeForm.value = item;
};
const createNotice = () => {
  resetNoticeForm();
  showNoticeForm.value = true;
};
</script>

<style lang="scss" scoped></style>
