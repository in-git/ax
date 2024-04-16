<template>
  <a-card :style="{ boxShadow: 'none' }">
    <a-table
      @change="pageChange"
      table-layout="fixed"
      sticky
      :row-selection="{
        selectedRowKeys: selectedKeys,
        onChange,
      }"
      v-bind="$attrs"
      :pagination="pagination"
      :customRow="customRow"
      :rowKey="table.rowKey"
      :columns="formatColumns(columns)"
      :data-source="table.data"
    >
      <template #bodyCell="{ column, record }">
        <slot :value="{ column, record }"></slot>
        <template v-if="column.key === 'status'">
          <slot name="status">
            <span class="text-12 system-subtitle">
              <span v-if="record.status === '1'">
                失效
                <a-badge color="red"></a-badge>
              </span>
              <span v-else-if="record.status === '0'">
                生效
                <a-badge color="green"></a-badge>
              </span>
            </span>
          </slot>
        </template>
      </template>
    </a-table>
  </a-card>
</template>

<script setup lang="ts">
import type { IQuery, TableConfig } from '@/api/config/types';
import { formatColumns } from '@/utils/table/table';
import type { TableColumnProps, TablePaginationConfig } from 'ant-design-vue';
import type { Key } from 'ant-design-vue/es/_util/type';
import type { FilterValue, SorterResult } from 'ant-design-vue/es/table/interface';

const emit = defineEmits([
  'update:selectedKeys',
  'update:query',
  'reload',
  'update:form',
  'dblclick',
]);

const selectedKeys = ref();
const props = withDefaults(
  defineProps<{
    table: TableConfig;
    query: IQuery;
    columns: TableColumnProps[];
    selectedKeys: number[] | string[];
    form?: any;
    pagination?: TablePaginationConfig | false;
  }>(),
  {
    pagination: false,
  },
);

const onChange = (keys: Key[]) => {
  selectedKeys.value = keys;
};

const customRow = (record: any) => {
  return {
    onClick() {
      const id = record[props.table.rowKey];
      emit('update:form', record);
      selectedKeys.value = [id];
    },
    onDblclick() {
      const id = [record[props.table.rowKey]];
      emit('dblclick', id);
    },
  };
};

const pageChange = (
  pagination: TablePaginationConfig,
  filters: Record<string, FilterValue>,
  sorter: SorterResult<any> | SorterResult<any>[],
) => {
  emit('update:query', {
    ...props.query,
    pageNum: pagination.current,
    pageSize: pagination.pageSize,
  });
  emit('reload');
};

watch(selectedKeys, () => {
  emit('update:selectedKeys', selectedKeys.value);
});
</script>

<style lang="scss" scoped></style>
