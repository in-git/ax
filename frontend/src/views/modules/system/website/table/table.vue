<template>
  <div>
    <TableHeadVue />
    <SystemTable
      :columns="websiteColumns"
      :table="websiteTable"
      v-model:query="websiteQuery"
      v-model:selected-keys="websiteKeys"
      v-model:form="websiteForm"
    >
      <template v-slot="{ value }">
        <template v-if="value.column.dataIndex === 'operation'">
          <Operation :loading="websiteTable.loading"
          @open-change="openChange(value.record as SystemWebsite)"
          @edit="websiteEdit(value.record.websiteId)"
          :items="websiteOperationList" />
        </template>
      </template>
    </SystemTable>
  </div>
</template>

<script setup lang="ts">
import SystemTable from '@/views/components/table/SystemTable.vue';
import TableHeadVue from './table-head/head.vue';
import type { SystemWebsite } from '@/api/modules/system/website/types';
import Operation from '@/views/components/table/Operation.vue';
import { websiteColumns } from '../data/column';
import { websiteEdit, websiteList } from '../data/curd';
import { websiteForm } from '../data/form';
import { websiteKeys, websiteOperationList, websiteQuery, websiteTable } from '../data/table';

onMounted(() => {
  websiteList();
});

const openChange = (record: SystemWebsite) => {
  websiteForm.value = record;
};
</script>

<style lang="scss" scoped></style>
