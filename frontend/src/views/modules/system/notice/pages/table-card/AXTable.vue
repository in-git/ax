<template>
  <a-card :style="{ boxShadow: 'none' }" :bordered="false" :bodyStyle="{ padding: '0' }">
    <a-table
      @change="pageChange"
      table-layout="fixed"
      sticky
      :row-selection="{
        selectedRowKeys: noticeKeys,
        onChange: (k: any[]) => (noticeKeys = k),
      }"
      bordered
      :loading="noticeTable.loading"
      :pagination="false"
      :customRow="customRow"
      :rowKey="noticeTable.rowKey"
      :columns="formatColumns(noticeColumns)"
      :data-source="noticeTable.data"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'operation'">
          <a-dropdown-button
            trigger="click"
            @click="noticeEdit(record.noticeId)"
            @open-change="openChange(record as SystemNotice)"
          >
            <EditOutlined />
            <template #overlay>
              <a-menu>
                <div v-perm="'system:notice:export'">
                  <a-menu-item @click="noticeExport">
                    <template #icon>
                      <ExportOutlined />
                    </template>
                    导出
                  </a-menu-item>
                </div>
                <div v-perm="'system:notice:remove'">
                  <a-menu-item @click="noticeDelete(record.noticeId)">
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
import type { SystemNotice } from '@/api/modules/system/notice/types';
import { formatColumns } from '@/utils/table/table';
import { useArrayFilter, useCloned } from '@vueuse/core';
import type { TablePaginationConfig } from 'ant-design-vue';
import type { FilterValue, SorterResult } from 'ant-design-vue/es/table/interface';
import { noticeColumns } from '../../data/column';
import { noticeDelete, noticeEdit, noticeExport } from '../../data/curd';
import { noticeForm } from '../../data/form';
import { noticeKeys, noticeQuery, noticeTable } from '../../data/table';

const openChange = (record: SystemNotice) => {
  noticeForm.value = useCloned(record).cloned.value;
};

/* 行事件 */
const customRow = (record: SystemNotice) => {
  return {
    onClick() {
      const id = (record as any)[noticeTable.value.rowKey];
      noticeForm.value = record;
      if (!noticeKeys.value.includes(id)) {
        noticeKeys.value.push(id);
      } else {
        noticeKeys.value = useArrayFilter(noticeKeys.value, e => e !== id).value;
      }
      noticeKeys.value = [record.noticeId];
    },
    onDblclick() {
      noticeEdit(record.noticeId);
    },
  };
};

/* 分页事件触发 */
const pageChange = (
  pagination: TablePaginationConfig,
  filters: Record<string, FilterValue>,
  sorter: SorterResult<SystemNotice> | SorterResult<SystemNotice>[],
) => {
  noticeQuery.value.pageNum = pagination.current!;
  noticeQuery.value.pageSize = pagination.pageSize!;
};
</script>

<style lang="scss" scoped></style>
