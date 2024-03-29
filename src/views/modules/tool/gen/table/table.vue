<template>
  <div>
    <TableHeadVue />
    <SystemTable
      :columns="codeColumns"
      :table="codeTable"
      :query="codeQuery"
      v-model:selected-keys="codeKeys"
    >
      <template v-slot="{ value }">
        <template v-if="value.column.dataIndex === 'operation'">
          <Operation @edit="codeEdit" :items="codeOperationList" />
        </template>
      </template>
    </SystemTable>
  </div>
</template>

<script setup lang="ts">
import SystemTable from '@/views/components/table/SystemTable.vue';
import TableHeadVue from './table-head/head.vue';

import Operation from '@/views/components/table/Operation.vue';
import { codeColumns } from '../data/column';
import { codeEdit, codeList } from '../data/curd';
import { codeKeys, codeOperationList, codeQuery, codeTable } from '../data/table';

onMounted(() => {
  codeList();
});
</script>

<style lang="scss" scoped></style>
