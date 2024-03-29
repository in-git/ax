<template>
  <div>
    <TableHeadVue />
    <SystemTable
      :columns="configColumns"
      :table="configTable"
      :query="configQuery"
      v-model:selected-keys="configKeys"
    >
      <template v-slot="{ value }">
        <template v-if="value.column.key === 'operation'">
          <Operation @edit="editConfig(value.record.configId)" :items="items" />
        </template>
      </template>
    </SystemTable>
  </div>
</template>

<script setup lang="ts">
import SystemTable from '@/views/components/table/SystemTable.vue';
import TableHeadVue from './table-head/head.vue';

import Operation from '@/views/components/table/Operation.vue';
import { configColumns } from '../data/column';
import { configList, editConfig } from '../data/curd';
import { configKeys, configQuery, configTable } from '../data/table';

const items: any[] = [];
onMounted(() => {
  configList();
});
</script>

<style lang="scss" scoped></style>
