<template>
  <div>
    <TableHeadVue />
    <SystemTable
      :columns="dicDataColumns"
      :table="dicDataTable"
      :query="dicDataQuery"
      v-model:selected-keys="dicDataKeys"
    >
      <template v-slot="{ value }">
        <template v-if="value.column.dataIndex === 'operation'">
          <Operation @edit="dicDataEdit" :items="dicDataOperationList" />
        </template>
      </template>
    </SystemTable>
  </div>
</template>

<script setup lang="ts">
import SystemTable from '@/views/components/table/SystemTable.vue';
import TableHeadVue from './table-head/head.vue';

import Operation from '@/views/components/table/Operation.vue';
import { dicDataColumns } from '../data/column';
import { dicDataEdit, dicDataList } from '../data/curd';
import { dicDataKeys, dicDataOperationList, dicDataQuery, dicDataTable } from '../data/table';

onMounted(() => {
  dicDataList();
});
</script>

<style lang="scss" scoped></style>
