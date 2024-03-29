<template>
  <div>
    <TableHeadVue />
    <SystemTable
      :columns="dictColumns"
      :table="dictTable"
      :query="dictQuery"
      v-model:selected-keys="dictKeys"
    >
      <template v-slot="{ value }">
        <template v-if="value.column.dataIndex === 'operation'">
          <Operation @edit="dictEdit" :items="dictOperationList" />
        </template>
      </template>
    </SystemTable>
  </div>
</template>

<script setup lang="ts">
import SystemTable from '@/views/components/table/SystemTable.vue';
import TableHeadVue from './table-head/head.vue';

import Operation from '@/views/components/table/Operation.vue';
import { dictColumns } from '../data/column';
import { dictEdit, dictList } from '../data/curd';
import { dictKeys, dictOperationList, dictQuery, dictTable } from '../data/table';

onMounted(() => {
  dictList();
});
</script>

<style lang="scss" scoped></style>
