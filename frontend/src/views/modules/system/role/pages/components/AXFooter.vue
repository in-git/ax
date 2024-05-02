<template>
  <a-card :bordered="false" :bodyStyle="{ padding: '4px 12px' }" class="card__footer">
    <a-flex justify="space-between" :align="'center'">
      <div>
        <span>已选:</span>
        <span>（{{ roleKeys.length }}）</span>
      </div>
      <a-pagination
        :total="roleQuery.total"
        :current="roleQuery.pageNum"
        :page-size="roleQuery.pageSize"
        show-size-changer
        @change="pageChange"
        show-quick-jumper
        show-less-items
      ></a-pagination>
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
import { roleList } from '../../data/curd';
import { roleKeys, roleQuery } from '../../data/table';

const pageChange = (page: number, pageSize: number) => {
  roleQuery.value.pageNum = page;
  roleQuery.value.pageSize = pageSize;
  roleList();
};
</script>

<style lang="scss" scoped></style>