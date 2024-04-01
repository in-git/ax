<template>
  <div>
    <TableHeadVue />
    <SystemTable
      :columns="jobColumns"
      :table="jobTable"
      v-model:query="jobQuery"
      v-model:selected-keys="jobKeys"
      v-model:form="jobForm"
    >
      <template v-slot="{ value }">
        <template v-if="value.column.dataIndex === 'operation'">
          <Operation @edit="jobEdit" :items="jobOperationList" />
        </template>
      </template>
    </SystemTable>
  </div>
</template>

<script setup lang="ts">
import SystemTable from '@/views/components/table/SystemTable.vue';
import TableHeadVue from './table-head/head.vue';

import Operation from '@/views/components/table/Operation.vue';
import { jobColumns } from '../data/column';
import { jobEdit, jobList } from '../data/curd';
import { jobForm } from '../data/form';
import { jobKeys, jobOperationList, jobQuery, jobTable } from '../data/table';

onMounted(() => {
  jobList();
});
</script>

<style lang="scss" scoped></style>
