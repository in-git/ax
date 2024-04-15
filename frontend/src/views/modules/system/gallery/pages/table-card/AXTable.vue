<template>
  <a-card :style="{ boxShadow: 'none' }">
    <a-table
      @change="pageChange"
      table-layout="fixed"
      sticky
      :row-selection="{
        selectedRowKeys: galleryKeys,
        onChange: (k: any[]) => (galleryKeys = k),
      }"
      :pagination="false"
      :customRow="customRow"
      :rowKey="galleryTable.rowKey"
      :columns="formatColumns(galleryColumns)"
      :data-source="galleryTable.data"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'operation'">
          <Operation
            :loading="galleryTable.loading"
            @open-change="openChange(record as SystemGallery)"
            @onClick="galleryEdit(record.galleryId)"
            :items="galleryOperationList"
          />
        </template>
        <template v-else-if="column.key === 'imageUrl'">
          <a-image height="40px" :src="`${ossURL}${record.imageUrl}`"></a-image>
        </template>
      </template>
    </a-table>
  </a-card>
</template>

<script setup lang="ts">
import type { SystemGallery } from '@/api/modules/system/gallery/types';
import { formatColumns } from '@/utils/table/table';
import Operation from '@/views/components/table/Operation.vue';
import type { TablePaginationConfig } from 'ant-design-vue';
import type { FilterValue, SorterResult } from 'ant-design-vue/es/table/interface';
import { galleryColumns } from '../../data/column';
import { galleryEdit } from '../../data/curd';
import { galleryForm } from '../../data/form';
import { galleryKeys, galleryOperationList, galleryQuery, galleryTable } from '../../data/table';

import { ossURL } from '@/api/utils/config';

const openChange = (record: SystemGallery) => {
  galleryForm.value = record;
};

/* 行事件 */
const customRow = (record: SystemGallery) => {
  return {
    onClick() {
      galleryKeys.value = [record.galleryId];
    },
    onDblclick() {
      galleryEdit(record.galleryId);
    },
  };
};

/* 分页事件触发 */
const pageChange = (
  pagination: TablePaginationConfig,
  filters: Record<string, FilterValue>,
  sorter: SorterResult<SystemGallery> | SorterResult<SystemGallery>[],
) => {
  galleryQuery.value.pageNum = pagination.current!;
  galleryQuery.value.pageSize = pagination.pageSize!;
};
</script>

<style lang="scss" scoped></style>
