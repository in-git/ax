<template>
  <div>
    <TableHeadVue />
    <SystemTable
      :columns="__Columns"
      :table="__Table"
      v-model:query="__Query"
      v-model:selected-keys="__Keys"
    >
      <template v-slot="{ value }">
        <template v-if="value.column.dataIndex === 'operation'">
          <Operation @edit="__Edit" :items="__OperationList" />
        </template>
      </template>
    </SystemTable>
  </div>
</template>

<script setup lang="ts">
import SystemTable from '@/views/components/table/SystemTable.vue';
import TableHeadVue from './table-head/head.vue';

import Operation from '@/views/components/table/Operation.vue';
import { __Columns } from '../data/column';
import { __Edit, __List } from '../data/curd';
import { __Keys, __OperationList, __Query, __Table } from '../data/table';

onMounted(() => {
  __List();
});
</script>

<style lang="scss" scoped></style>
