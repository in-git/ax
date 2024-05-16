<template>
  <a-card :bordered="false" :bodyStyle="{ padding: '4px 12px' }" class="ax_plain_card">
    <a-flex justify="space-between" :align="'center'">
      <div>
        <span>已选:</span>
        <span>（{{ testKeys.length }}）</span>
      </div>
      <a-pagination
        :total="testQuery.total"
        :current="testQuery.pageNum"
        :page-size="testQuery.pageSize"
        show-size-changer
        @change="pageChange"
        show-quick-jumper
        show-less-items
      ></a-pagination>
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
import { testList } from '../../data/curd';
import { testKeys, testQuery } from '../../data/table';

const pageChange = (page: number, pageSize: number) => {
  testQuery.value.pageNum = page;
  testQuery.value.pageSize = pageSize;
  testList();
};
</script>

<style lang="scss" scoped></style>
