<template>
  <a-card :bordered="false" :bodyStyle="{ padding: '4px 12px' }" class="ax_plain_card">
    <a-flex justify="space-between" :align="'center'">
      <div>
        <span>已选:</span>
        <span>（{{ postKeys.length }}）</span>
      </div>
      <a-pagination
        :total="postQuery.total"
        :current="postQuery.pageNum"
        :page-size="postQuery.pageSize"
        show-size-changer
        @change="pageChange"
        show-quick-jumper
        show-less-items
      ></a-pagination>
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
import { postList } from '../../data/curd';
import { postKeys, postQuery } from '../../data/table';

const pageChange = (page: number, pageSize: number) => {
  postQuery.value.pageNum = page;
  postQuery.value.pageSize = pageSize;
  postList();
};
</script>

<style lang="scss" scoped></style>