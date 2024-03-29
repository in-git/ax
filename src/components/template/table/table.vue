<template>
  <div>
    <TableHeadVue />
    <SystemTable
      :columns="__columns"
      :table="__table"
      :query="__query"
      v-model:selected-keys="__keys"
    >
      <template v-slot="{ value }">
        <template v-if="value.column.dataIndex === 'operation'">
          <Operation @edit="__edit" :items="__operationList" />
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
import { __keys, __operationList, __query, __table } from '../data/table';
</script>

<style lang="scss" scoped></style>
