<template>
  <SystemTable
    :columns="configColumns"
    :table="configTable"
    v-model:query="configQuery"
    v-model:selected-keys="configKeys"
    v-model:form="configForm"
    @dblclick="onDblclick"
  >
    <template v-slot="{ value }">
      <template v-if="value.column.dataIndex === 'operation'">
        <Operation
          :loading="configTable.loading"
          @open-change="openChange(value.record as SystemConfig)"
          @edit="configEdit(value.record.configId)"
          :items="configOperationList"
        />
      </template>
    </template>
  </SystemTable>
</template>

<script setup lang="ts">
import type {  SystemConfig } from '@/api/modules/system/config/types';
import Operation from '@/views/components/table/Operation.vue';
import SystemTable from '@/views/components/table/SystemTable.vue';
import { configColumns } from '../../data/column';
import { configEdit } from '../../data/curd';
import { configForm } from '../../data/form';

import { configKeys, 
    configOperationList, 
    configQuery, 
    configTable 
} from '../../data/table';

const openChange = (record: SystemConfig) => {
  configForm.value = record;
};

const onDblclick = (id: number) => {
  configEdit(id);
};
</script>

<style lang="scss" scoped></style>
