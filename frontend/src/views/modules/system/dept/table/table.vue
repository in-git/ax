<template>
  <div>
    <TableHeadVue />
    <SystemTable
      :columns="deptColumns"
      :table="deptTable"
      v-model:query="deptQuery"
      v-model:selected-keys="deptKeys"
      v-model:form="deptForm"
    >
      <template v-slot="{ value }">
        <template v-if="value.column.dataIndex === 'operation'">
          <Operation @edit="deptEdit" :items="deptOperationList" :loading="deptTable.loading" />
        </template>
      </template>
    </SystemTable>
  </div>
</template>

<script setup lang="ts">
import SystemTable from '@/views/components/table/SystemTable.vue';
import TableHeadVue from './table-head/head.vue';

import Operation from '@/views/components/table/Operation.vue';
import { deptColumns } from '../data/column';
import { deptEdit, deptList } from '../data/curd';
import { deptForm } from '../data/form';
import { deptKeys, deptOperationList, deptQuery, deptTable } from '../data/table';

onMounted(() => {
  deptList();
});
</script>

<style lang="scss" scoped></style>
