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
      :columns="formatColumns(columns)"
      :data-source="table.data"
    >
      <template #bodyCell="{ column, record }">
        <slot :value="{ column, record }"></slot>
        <template v-if="column.key === 'status'">
          <!-- <slot name="status"></slot> -->
          <span class="text-12 text-999">
            <span v-if="record.status === '1'">
              未生效
              <a-badge color="red"></a-badge>
            </span>
            <span v-else-if="record.status === '0'">
              生效
              <a-badge color="green"></a-badge>
            </span>
          </span>
        </template>
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
import type { IQuery, TableConfig } from '@/api/config/types';
import type { SystemMenu } from '@/api/modules/system/menu/types';
import { formatColumns } from '@/utils/table/table';
import type { TableColumnProps, TablePaginationConfig } from 'ant-design-vue';
import type { Key } from 'ant-design-vue/es/_util/type';
import type { FilterValue, SorterResult } from 'ant-design-vue/es/table/interface';
const emit = defineEmits(['update:selectedKeys']);
const selectedKeys = ref();

const props = defineProps<{
  table: TableConfig;
  query: IQuery;
  columns: TableColumnProps[];
  selectedKeys: number[];
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
