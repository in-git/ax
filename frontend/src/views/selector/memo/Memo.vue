<template>
  <a-card class="system-memo">
    <a-space class="w-100" direction="vertical">
      <div>
        <h4>备忘录列表</h4>
      </div>
      <div class="mb-4 flex justify-between align-center">
        <a-pagination :total="query.total" :current="query.pageNum" @change="pageChange" />

        <div class="text-right">
          <a-button type="primary" @click="confirm" :disabled="!currentRow">确定</a-button>
        </div>
      </div>
      <a-spin :spinning="loading">
        <table>
          <thead>
            <tr>
              <th>名称</th>
              <th>值</th>
            </tr>
          </thead>
          <tbody>
            <tr
              @dblclick="confirm"
              v-for="(item, key) in dictData"
              :key="item.memoId"
              @click="selectItem(item)"
              :class="{ active: item.memoId === currentRow?.memoId }"
            >
              <td>{{ item.title }}</td>
              <td>
                {{ item.value }}
              </td>
            </tr>
          </tbody>
        </table>
      </a-spin>
    </a-space>
  </a-card>
</template>

<script setup lang="ts">
import type { IQuery } from '@/api/config/types';
import { fetchMemoList } from '@/api/modules/system/memo/memo';
import type { SystemMemo } from '@/api/modules/system/memo/types';

const currentRow = ref<SystemMemo>();
const dictData = ref<SystemMemo[]>([]);

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

const pageChange = (page: number, pageSize: number) => {
  query.value.pageNum = page;
  query.value.pageSize = pageSize;
  getList();
};

const confirm = () => {
  emit('update:value', currentRow.value?.value);
};
const selectItem = (item: SystemMemo) => {
  currentRow.value = item;
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
  table {
    width: 100%;
    border: 1px solid #ddd;
    table-layout: fixed;
    text-align: center;

    tr {
      border-bottom: 1px solid #ddd;
      &:hover {
        background: #f5f2f3;
      }
    }
    tr.active {
      background: var(--primary);
      color: white;
    }
  }
  tbody {
    td {
      border-right: 1px solid #ddd;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 24px;
      padding: 2px 8px;
    }
  }
  h3 {
    font-weight: bold;
  }
}
</style>
