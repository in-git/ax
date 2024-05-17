<template>
  <a-card :style="{ boxShadow: 'none' }" :bordered="false" :bodyStyle="{ padding: '0' }">
    <a-table
      @change="pageChange"
      table-layout="fixed"
      sticky
      :row-selection="{
        selectedRowKeys: postKeys,
        onChange: (k: any[]) => (postKeys = k),
      }"
      bordered
      :loading="postTable.loading"
      :pagination="false"
      :customRow="customRow"
      :rowKey="postTable.rowKey"
      :columns="formatColumns(postColumns)"
      :data-source="postTable.data"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'operation'">
          <a-dropdown-button
            trigger="click"
            @click="postEdit(record.postId)"
            @open-change="openChange(record as SystemPost)"
          >
            <EditOutlined />
            <template #overlay>
              <a-menu>
                <div v-perm="'system:notice:remove'">
                  <a-menu-item @click="postDelete(record.postId)">
                    <template #icon>
                      <DeleteOutlined />
                    </template>
                    删除
                  </a-menu-item>
                </div>
              </a-menu>
            </template>
          </a-dropdown-button>
        </template>
      </template>
    </a-table>
  </a-card>
</template>

<script setup lang="ts">
import type { SystemPost } from '@/api/modules/system/post/types';
import { formatColumns } from '@/utils/table/table';
import { useArrayFilter, useCloned } from '@vueuse/core';
import type { TablePaginationConfig } from 'ant-design-vue';
import type { FilterValue, SorterResult } from 'ant-design-vue/es/table/interface';
import { postColumns } from '../../data/column';
import { postDelete, postEdit } from '../../data/curd';
import { postForm } from '../../data/form';
import { postKeys, postQuery, postTable } from '../../data/table';

const openChange = (record: SystemPost) => {
  postForm.value = useCloned(record).cloned.value;
};

/* 行事件 */
const customRow = (record: SystemPost) => {
  return {
    onClick() {
      const id = (record as any)[postTable.value.rowKey];
      postForm.value = record;
      if (!postKeys.value.includes(id)) {
        postKeys.value.push(id);
      } else {
        postKeys.value = useArrayFilter(postKeys.value, e => e !== id).value;
      }
      postKeys.value = [record.postId];
    },
    onDblclick() {
      postEdit(record.postId);
    },
  };
};

/* 分页事件触发 */
const pageChange = (
  pagination: TablePaginationConfig,
  filters: Record<string, FilterValue>,
  sorter: SorterResult<SystemPost> | SorterResult<SystemPost>[],
) => {
  postQuery.value.pageNum = pagination.current!;
  postQuery.value.pageSize = pagination.pageSize!;
};
</script>

<style lang="scss" scoped></style>
