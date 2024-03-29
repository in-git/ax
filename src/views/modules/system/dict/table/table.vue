<template>
  <div>
    <TableHeadVue />
    <SystemTable
      :columns="__columns"
      :table="dictTable"
      :query="dictQuery"
      v-model:selected-keys="dictKeys"
    >
      <template v-slot="{ value }">
        <template v-if="value.column.dataIndex === 'operation'">
          <Operation @edit="__edit" :items="dictOperationList" />
        </template>
      </template>
    </SystemTable>
  </div>
</template>

<script setup lang="ts">
import SystemTable from '@/views/components/table/SystemTable.vue';
import TableHeadVue from './table-head/head.vue';

import Operation from '@/views/components/table/Operation.vue';
import { __columns } from '../data/column';
import { __edit } from '../data/curd';
import { dictKeys, dictOperationList, dictQuery, dictTable } from '../data/table';
</script>

<style lang="scss" scoped></style>
