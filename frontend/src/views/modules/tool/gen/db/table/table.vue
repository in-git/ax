<template>
  <div>
    <TableHeadVue />
    <a-card class="mt-8">
      <SystemTable
        :columns="dbColumns"
        :table="dbTable"
        v-model:query="dbQuery"
        v-model:selected-keys="dbKeys"
        @reload="dbList"
      >
        <template v-slot="{ value }">
          <template v-if="value.column.dataIndex === 'operation'">
            <a-button type="text" @click="importDb(value.record.tableName)">
              <DownloadOutlined />
            </a-button>
          </template>
        </template>
      </SystemTable>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import SystemTable from '@/views/components/table/SystemTable.vue';
import TableHeadVue from './table-head/head.vue';

import { dbColumns } from '../data/column';
import { dbList, importDb } from '../data/curd';
import { dbKeys, dbQuery, dbTable } from '../data/table';
onMounted(() => {
  dbList();
});
</script>

<style lang="scss" scoped></style>
