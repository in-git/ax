<template>
  <a-card class="system-memo" title="备忘录列表" :body-style="{ overflow: 'auto' }">
    <a-flex :gap="2" class="px-4 py-8" :justify="'space-between'">
      <a-segmented
        @change="getList"
        :options="memoTypeOptions"
        v-model:value="query.type"
      ></a-segmented>
      <a-flex>
        <a-button class="mr-4" @click="getList">
          <reload-outlined />
        </a-button>
        <a-button type="primary" @click="confirm" :disabled="!currentRow">确定</a-button>
      </a-flex>
    </a-flex>
    <a-spin :spinning="loading">
      <a-table
        sticky
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
  </a-card>
</template>

<script setup lang="ts">
import type { IQuery } from '@/api/config/types';
import { fetchMemoList } from '@/api/modules/system/memo/memo';
import type { SystemMemo } from '@/api/modules/system/memo/types';
import { formatColumns } from '@/utils/table/table';
import { memoTypeOptions } from '@/views/modules/system/memo/data/options';
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
  type: '1',
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
  :deep(.ant-card-body) {
    padding: 0;
    padding-top: 0;
    max-height: 360px;
  }
}
</style>
