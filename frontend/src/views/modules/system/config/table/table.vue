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
        <template v-if="value.column.dataIndex === 'operation'">
          <Operation
            @edit="editConfig(value.record.configId)"
            @open-change="openChange(value.record as any)"
            :items="configMenus"
          />
        </template>
        <template v-else-if="value.column.dataIndex === 'configType'">
          <a-switch
            disabled
            v-model:checked="value.record.configType"
            un-checked-value="N"
            checked-value="Y"
          ></a-switch>
        </template>
      </template>
    </SystemTable>
  </div>
</template>

<script setup lang="ts">
import SystemTable from '@/views/components/table/SystemTable.vue';
import TableHeadVue from './table-head/head.vue';

import type { SystemConfig } from '@/api/modules/system/config/types';
import Operation from '@/views/components/table/Operation.vue';
import { configColumns } from '../data/column';
import { configList, editConfig } from '../data/curd';
import { configKeys, configMenus, configQuery, configTable } from '../data/table';

import { configForm } from '../data/form';
const openChange = (record: SystemConfig) => {
  configForm.value = record;
};

onMounted(() => {
  configList();
});
</script>

<style lang="scss" scoped></style>
