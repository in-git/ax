<template>
  <div class="card-footer px-12 flex align-center justify-between">
    <div class="text-12 text-999">
      <span>已选:</span>
      <span>（{{ websiteKeys.length }}）</span>
    </div>
    <a-pagination
      :total="websiteQuery.total"
      :current="websiteQuery.pageNum"
      :page-size="websiteQuery.pageSize"
      show-size-changer
      @change="pageChange"
    ></a-pagination>
  </div>
</template>

<script setup lang="ts">
import { websiteList } from '../data/curd';
import { websiteKeys, websiteQuery } from '../data/table';

const pageChange = (page: number, pageSize: number) => {
  websiteQuery.value.pageNum = page;
  websiteQuery.value.pageSize = pageSize;
  websiteList();
};
</script>

<style lang="scss" scoped>
.card-footer {
  position: sticky;
  left: 0;
  bottom: 0;
  width: 100%;
  background: white;
  border-top: 1px solid #ddd;
  flex-basis: 36px;
  z-index: 100;
  line-height: 36px;
}
</style>
