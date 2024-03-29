<template>
  <div>
    <TableHeadVue />
    <SystemTable
      :columns="dictColumns"
      :table="dictTable"
      v-model:query="dictQuery"
      v-model:selected-keys="dictKeys"
      @reload="dictList"
    >
      <template v-slot="{ value }">
        <template v-if="value.column.dataIndex === 'operation'">
          <Operation @edit="dictEdit(value.record.dictId)" :items="dictOperationList" />
        </template>
        <template v-else-if="value.column.dataIndex === 'dictType'">
          <a-button @click="selectDictConfig(value.record.dictType)" type="link">
            {{ value.record.dictName }}
          </a-button>
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
import { dictEdit, dictList, selectDictConfig } from '../data/curd';
import { dictKeys, dictOperationList, dictQuery, dictTable } from '../data/table';

onMounted(() => {
  dictList();
});
</script>

<style lang="scss" scoped></style>
