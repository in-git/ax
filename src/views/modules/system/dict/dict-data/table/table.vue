<template>
  <div>
    <TableHeadVue />
    <SystemTable
      :columns="dictDataColumns"
      :table="dictDataTable"
      :query="dictDataQuery"
      v-model:selected-keys="dictDataKeys"
    >
      <template v-slot="{ value }">
        <template v-if="value.column.dataIndex === 'operation'">
          <Operation @edit="dictDataEdit(value.record.dictCode)" :items="dictDataOperationList" />
        </template>
      </template>
    </SystemTable>
  </div>
</template>

<script setup lang="ts">
import SystemTable from '@/views/components/table/SystemTable.vue';
import TableHeadVue from './table-head/head.vue';

import Operation from '@/views/components/table/Operation.vue';
import { dictDataColumns } from '../data/column';
import { dictDataEdit, listDictData } from '../data/curd';
import { dictDataKeys, dictDataOperationList, dictDataQuery, dictDataTable } from '../data/table';

onMounted(() => {
  listDictData();
});
</script>

<style lang="scss" scoped></style>
