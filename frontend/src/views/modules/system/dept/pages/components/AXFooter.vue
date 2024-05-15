<template>
  <a-card :bordered="false" :bodyStyle="{ padding: '4px 12px' }" class="ax_plain_card">
    <a-flex justify="space-between" :align="'center'">
      <div>
        <span>已选:</span>
        <span>（{{ deptKeys.length }}）</span>
      </div>
      <a-pagination
        :total="deptQuery.total"
        :current="deptQuery.pageNum"
        :page-size="deptQuery.pageSize"
        show-size-changer
        @change="pageChange"
        show-quick-jumper
        show-less-items
      ></a-pagination>
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
import { deptList } from '../../data/curd';
import { deptKeys, deptQuery } from '../../data/table';

const pageChange = (page: number, pageSize: number) => {
  deptQuery.value.pageNum = page;
  deptQuery.value.pageSize = pageSize;
  deptList();
};
</script>

<style lang="scss" scoped></style>
