<template>
  <a-card :style="{ boxShadow: 'none' }" :body-style="{ padding: '0' }">
    <a-table
      @change="pageChange"
      table-layout="fixed"
      sticky
      :row-selection="{
        selectedRowKeys: websiteKeys,
        onChange: (k: any[]) => (websiteKeys = k),
      }"
      :loading="websiteTable.loading"
      :bordered="false"
      :pagination="false"
      :customRow="customRow"
      :rowKey="websiteTable.rowKey"
      :columns="formatColumns(websiteColumns)"
      :data-source="websiteTable.data"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'operation'">
          <a-dropdown-button
            trigger="click"
            @click="openLink(record.url)"
            @open-change="openChange(record as SystemWebsite)"
          >
            <LinkOutlined />
            <template #overlay>
              <a-menu>
                <a-menu-item
                  :disabled="websiteDisable(record.userId)"
                  @click="websiteDelete(record.userId)"
                >
                  <template #icon>
                    <DeleteOutlined />
                  </template>
                  删除
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown-button>
        </template>
        <template v-else-if="column.key === 'from'">
          <a-tag
            :bordered="false"
            v-if="record.userId === userStore.$state.userInfo?.userId"
            color="green"
          >
            自己
          </a-tag>
          <a-tag v-else color="orange" :bordered="false">超管</a-tag>
        </template>
      </template>
    </a-table>
  </a-card>
</template>

<script setup lang="ts">
import type { SystemWebsite } from '@/api/modules/system/website/types';
import useUserStore from '@/store/user';
import { openLink } from '@/utils/common/utils';
import { formatColumns } from '@/utils/table/table';
import { useCloned } from '@vueuse/core';
import type { TablePaginationConfig } from 'ant-design-vue';
import type { FilterValue, SorterResult } from 'ant-design-vue/es/table/interface';
import { websiteColumns } from '../../data/column';
import { websiteDelete, websiteDisable, websiteEdit } from '../../data/curd';
import { websiteForm } from '../../data/form';
import { websiteKeys, websiteQuery, websiteTable } from '../../data/table';
const userStore = useUserStore();

const openChange = (record: SystemWebsite) => {
  websiteForm.value = useCloned(record).cloned.value;
};

/* 行事件 */
const customRow = (record: SystemWebsite) => {
  return {
    onClick() {
      websiteKeys.value = [record.websiteId!];
    },
    onDblclick() {
      websiteEdit(record.websiteId);
    },
  };
};

/* 分页事件触发 */
const pageChange = (
  pagination: TablePaginationConfig,
  filters: Record<string, FilterValue>,
  sorter: SorterResult<SystemWebsite> | SorterResult<SystemWebsite>[],
) => {
  websiteQuery.value.pageNum = pagination.current!;
  websiteQuery.value.pageSize = pagination.pageSize!;
};
</script>

<style lang="scss" scoped></style>
