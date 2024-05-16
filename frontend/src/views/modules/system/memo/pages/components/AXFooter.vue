<template>
  <a-card :bordered="false" :bodyStyle="{ padding: '4px 12px' }" class="ax_plain_card">
    <a-flex justify="space-between" :align="'center'">
      <div>
        <span>已选:</span>
        <span>（{{ memoKeys.length }}）</span>
      </div>
      <a-pagination
        :total="memoQuery.total"
        :current="memoQuery.pageNum"
        :page-size="memoQuery.pageSize"
        show-size-changer
        @change="pageChange"
        show-quick-jumper
        show-less-items
      ></a-pagination>
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
import { memoList } from '../../data/curd';
import { memoKeys, memoQuery } from '../../data/table';

const pageChange = (page: number, pageSize: number) => {
  memoQuery.value.pageNum = page;
  memoQuery.value.pageSize = pageSize;
  memoList();
};
</script>

<style lang="scss" scoped></style>
