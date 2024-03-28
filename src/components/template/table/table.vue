<template>
  <div>
    <SystemTable
      :columns="__columns"
      :table="__table"
      :query="__query"
      v-model:selected-keys="__keys"
    ></SystemTable>
  </div>
</template>

<script setup lang="ts">
import SystemTable from '@/views/components/table/SystemTable.vue';
import { __columns } from '../data/column';
import { __keys, __query, __table } from '../data/table';
</script>

<style lang="scss" scoped></style>
