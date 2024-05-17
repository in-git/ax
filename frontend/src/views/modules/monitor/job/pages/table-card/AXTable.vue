<template>
  <a-card :style="{ boxShadow: 'none' }" :bordered="false" :bodyStyle="{ padding: '0' }">
    <a-table
      @change="pageChange"
      table-layout="fixed"
      sticky
      :row-selection="{
        selectedRowKeys: jobKeys,
        onChange: (k: any[]) => (jobKeys = k),
      }"
      bordered
      :loading="jobTable.loading"
      :pagination="false"
      :customRow="customRow"
      :rowKey="jobTable.rowKey"
      :columns="formatColumns(jobColumns)"
      :data-source="jobTable.data"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'operation'">
          <a-dropdown-button
            trigger="click"
            @click="jobEdit(record.jobId)"
            @open-change="openChange(record as SystemJob)"
          >
            <EditOutlined />
            <template #overlay>
              <a-menu>
                <div v-perm="'system:job:export'">
                  <a-menu-item @click="jobDelete(record.jobId)">
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
import type { SystemJob } from '@/api/modules/monitor/job/types';
import { formatColumns } from '@/utils/table/table';
import { useArrayFilter, useCloned } from '@vueuse/core';
import type { TablePaginationConfig } from 'ant-design-vue';
import type { FilterValue, SorterResult } from 'ant-design-vue/es/table/interface';
import { jobColumns } from '../../data/column';
import { jobDelete, jobEdit } from '../../data/curd';
import { jobForm } from '../../data/form';
import { jobKeys, jobQuery, jobTable } from '../../data/table';

const openChange = (record: SystemJob) => {
  jobForm.value = useCloned(record).cloned.value;
};
/**
 * @description: 点击行触发
 * @param {*} record
 */
const customRow = (record: SystemJob) => {
  return {
    onClick() {
      const id = (record as any)[jobTable.value.rowKey];
      jobForm.value = record;
      if (!jobKeys.value.includes(id)) {
        jobKeys.value.push(id);
      } else {
        jobKeys.value = useArrayFilter(jobKeys.value, e => e !== id).value;
      }
      jobKeys.value = [record.jobGroup];
    },
    onDblclick() {
      jobEdit(record.jobGroup);
    },
  };
};

/* 分页事件触发 */
const pageChange = (
  pagination: TablePaginationConfig,
  filters: Record<string, FilterValue>,
  sorter: SorterResult<SystemJob> | SorterResult<SystemJob>[],
) => {
  jobQuery.value.pageNum = pagination.current!;
  jobQuery.value.pageSize = pagination.pageSize!;
};
</script>

<style lang="scss" scoped></style>
