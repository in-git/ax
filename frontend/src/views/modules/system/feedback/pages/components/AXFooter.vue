<template>
  <a-card :bordered="false" :bodyStyle="{ padding: '4px 12px' }" class="card__footer">
    <a-flex justify="space-between" :align="'center'">
      <div>
        <span>已选:</span>
        <span>（{{ feedbackKeys.length }}）</span>
      </div>
      <a-pagination
        :total="feedbackQuery.total"
        :current="feedbackQuery.pageNum"
        :page-size="feedbackQuery.pageSize"
        show-size-changer
        @change="pageChange"
        show-quick-jumper
        show-less-items
      ></a-pagination>
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
import { feedbackList } from '../../data/curd';
import { feedbackKeys, feedbackQuery } from '../../data/table';

const pageChange = (page: number, pageSize: number) => {
  feedbackQuery.value.pageNum = page;
  feedbackQuery.value.pageSize = pageSize;
  feedbackList();
};
</script>

<style lang="scss" scoped></style>