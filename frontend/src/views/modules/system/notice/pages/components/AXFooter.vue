<template>
  <a-card :bordered="false" :bodyStyle="{ padding: '4px 12px' }" class="ax_plain_card">
    <a-flex justify="space-between" :align="'center'">
      <div>
        <span>已选:</span>
        <span>（{{ noticeKeys.length }}）</span>
      </div>
      <a-pagination
        :total="noticeQuery.total"
        :current="noticeQuery.pageNum"
        :page-size="noticeQuery.pageSize"
        show-size-changer
        @change="pageChange"
        show-quick-jumper
        show-less-items
      ></a-pagination>
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
import { noticeList } from '../../data/curd';
import { noticeKeys, noticeQuery } from '../../data/table';

const pageChange = (page: number, pageSize: number) => {
  noticeQuery.value.pageNum = page;
  noticeQuery.value.pageSize = pageSize;
  noticeList();
};
</script>

<style lang="scss" scoped></style>
