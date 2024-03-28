<template>
  <div>
    <a-table
      class="px-12"
      :loading="table.loading"
      @change="pageChange"
      table-layout="fixed"
      sticky
      :row-selection="{
        selectedRowKeys: selectedKeys,
        onChange,
      }"
      :customRow="customRow"
      :rowKey="table.rowKey"
      :columns="formatColumns(table.columns)"
      :data-source="table.data"
    >
      <template #bodyCell="{ column, record }">
        <slot :value="{ column, record }"></slot>
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
import type { IQuery, TableConfig } from '@/api/config/types';
import type { SystemMenu } from '@/api/modules/system/menu/types';
import { formatColumns } from '@/utils/common/format';
import type { TablePaginationConfig } from 'ant-design-vue';
import type { Key } from 'ant-design-vue/es/_util/type';
import type { FilterValue, SorterResult } from 'ant-design-vue/es/table/interface';

const emit = defineEmits(['update:selectedKeys']);
const selectedKeys = ref();

const props = defineProps<{
  table: TableConfig;
  query: IQuery;
}>();

const onChange = (keys: Key[]) => {
  selectedKeys.value = keys.map(e => Number(e));
};

const customRow = (record: any) => {
  return {
    onClick() {
      selectedKeys.value = [record[props.table.rowKey]];
    },
  };
};

const pageChange = (
  pagination: TablePaginationConfig,
  filters: Record<string, FilterValue>,
  sorter: SorterResult<SystemMenu> | SorterResult<SystemMenu>[],
) => {};

watch(selectedKeys, () => {
  emit('update:selectedKeys', selectedKeys.value);
});
</script>

<style lang="scss" scoped></style>
