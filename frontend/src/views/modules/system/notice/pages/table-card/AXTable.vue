<template>
  <SystemTable
    :columns="noticeColumns"
    :table="noticeTable"
    v-model:query="noticeQuery"
    v-model:selected-keys="noticeKeys"
    v-model:form="noticeForm"
    @dblclick="onDblclick"
  >
    <template v-slot="{ value }">
      <template v-if="value.column.dataIndex === 'operation'">
        <Operation
          :loading="noticeTable.loading"
          @open-change="openChange(value.record as SystemNotice)"
          @edit="noticeEdit(value.record.noticeId)"
          :items="noticeOperationList"
        />
      </template>
    </template>
  </SystemTable>
</template>

<script setup lang="ts">
import Operation from '@/views/components/table/Operation.vue';
import SystemTable from '@/views/components/table/SystemTable.vue';
import { noticeColumns } from '../../data/column';
import { noticeEdit } from '../../data/curd';
import { noticeForm } from '../../data/form';

import { noticeKeys, noticeOperationList, noticeQuery, noticeTable } from '../../data/table';

const openChange = (record: SystemNotice) => {
  noticeForm.value = record;
};

const onDblclick = (id: number) => {
  noticeEdit(id);
};
</script>

<style lang="scss" scoped></style>
