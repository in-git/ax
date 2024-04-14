<template>
  <a-card :bordered="false" :bodyStyle="{ padding: '4px 12px' }" class="card__footer">
    <a-flex justify="space-between" :align="'center'">
      <div>
        <span>已选:</span>
        <span>（{{ websiteKeys.length }}）</span>
      </div>
      <a-pagination
        :total="websiteQuery.total"
        :current="websiteQuery.pageNum"
        :page-size="websiteQuery.pageSize"
        show-size-changer
        @change="pageChange"
        show-quick-jumper
        show-less-items
      ></a-pagination>
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
import { websiteList } from '../../data/curd';
import { websiteKeys, websiteQuery } from '../../data/table';

const pageChange = (page: number, pageSize: number) => {
  websiteQuery.value.pageNum = page;
  websiteQuery.value.pageSize = pageSize;
  websiteList();
};
</script>

<style lang="scss" scoped></style>