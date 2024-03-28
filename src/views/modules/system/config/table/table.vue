<template>
  <div>
    <TableHeadVue />
    <SystemTable
      :columns="configColumns"
      :table="configTable"
      :query="configQuery"
      v-model:selected-keys="configKeys"
    ></SystemTable>
  </div>
</template>

<script setup lang="ts">
import SystemTable from '@/views/components/table/SystemTable.vue';
import TableHeadVue from './table-head/head.vue';

import { configColumns } from '../data/column';
import { configList } from '../data/curd';
import { configKeys, configQuery, configTable } from '../data/table';

onMounted(() => {
  configList();
});
</script>

<style lang="scss" scoped></style>
