<template>
  <a-card class="system-memo" title="备忘录列表" :bodyStyle="{ padding: '8px' }">
    <template #extra>
      <a-button type="primary" @click="confirm" :disabled="!currentRow">确定</a-button>
    </template>
    <a-space class="w-100" direction="vertical">
      <a-spin :spinning="loading">
        <a-table
          @change="pageChange"
          :pagination="{
            pageSize: query.pageSize,
            current: query.pageNum,
            total: query.total,
          }"
          row-key="memoId"
          :row-selection="{
            selectedRowKeys: selectedKeys,
          }"
          :custom-row="customRow"
          :columns="formatColumns(columns, false)"
          :data-source="dictData"
        ></a-table>
      </a-spin>
    </a-space>
  </a-card>
</template>

<script setup lang="ts">
import type { IQuery } from '@/api/config/types';
import { fetchMemoList } from '@/api/modules/system/memo/memo';
import type { SystemMemo } from '@/api/modules/system/memo/types';
import { formatColumns } from '@/utils/table/table';
import type { TablePaginationConfig } from 'ant-design-vue/es/table/Table';
import { columns } from './columns';

const currentRow = ref<SystemMemo>();
const dictData = ref<SystemMemo[]>([]);

const selectedKeys = ref<number[]>([]);
const emit = defineEmits(['update:value']);

const loading = ref(true);

const query = ref<IQuery>({
  pageNum: 1,
  pageSize: 20,
  total: 0,
});

defineProps<{
  value: any;
}>();

const pageChange = (pagination: TablePaginationConfig) => {
  query.value.pageNum = pagination.current!;
  query.value.pageSize = pagination.pageSize!;
  getList();
};

const customRow = (record: SystemMemo) => {
  return {
    onClick() {
      currentRow.value = record;
      selectedKeys.value = [record.memoId];
    },
    onDblclick() {
      emit('update:value', currentRow.value?.value);
    },
  };
};
const confirm = () => {
  emit('update:value', currentRow.value?.value);
};

const getList = async () => {
  loading.value = true;
  const { data } = await fetchMemoList(query.value);
  dictData.value = data.rows;
  query.value.total = data.total;
  loading.value = false;
};

onMounted(() => {
  getList();
});
</script>

<style lang="scss" scoped>
.system-memo {
  width: 400px;
  max-height: 400px;
  :deep(.ant-pagination) {
    margin: 8px;
  }
}
</style>
