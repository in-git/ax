<template>
  <SystemTable
    :columns="websiteColumns"
    :table="websiteTable"
    v-model:query="websiteQuery"
    v-model:selected-keys="websiteKeys"
    v-model:form="websiteForm"
    @dblclick="onDblclick"
  >
    <template v-slot="{ value }">
      <template v-if="value.column.dataIndex === 'operation'">
        <Operation
          :loading="websiteTable.loading"
          @open-change="openChange(value.record as SystemWebsite)"
          @edit="websiteEdit(value.record.websiteId)"
          :items="websiteOperationList"
        />
      </template>
    </template>
  </SystemTable>
</template>

<script setup lang="ts">
import type {  SystemWebsite } from '@/api/modules/system/website/types';
import Operation from '@/views/components/table/Operation.vue';
import SystemTable from '@/views/components/table/SystemTable.vue';
import { websiteColumns } from '../../data/column';
import { websiteEdit } from '../../data/curd';
import { websiteForm } from '../../data/form';

import { websiteKeys, 
    websiteOperationList, 
    websiteQuery, 
    websiteTable 
} from '../../data/table';

const openChange = (record: SystemWebsite) => {
  websiteForm.value = record;
};

const onDblclick = (id: number) => {
  websiteEdit(id);
};
</script>

<style lang="scss" scoped></style>
