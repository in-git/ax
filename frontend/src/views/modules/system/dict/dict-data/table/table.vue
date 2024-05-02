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
          <Operation
            @on-click="dictDataEdit(value.record.dictCode)"
            :loading="dictDataTable.loading"
            :items="dictDataOperationList"
            @open-change="openChange(value.record as SystemDictData)"
          />
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
import { dictDataForm } from '../data/form';
import { dictDataKeys, dictDataOperationList, dictDataQuery, dictDataTable } from '../data/table';

onMounted(() => {
  listDictData();
});

const openChange = (item: SystemDictData) => {
  dictDataForm.value = item;
};
</script>

<style lang="scss" scoped></style>
