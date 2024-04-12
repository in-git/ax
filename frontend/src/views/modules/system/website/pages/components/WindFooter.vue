<template>
  <div class="card-footer px-12 flex align-center justify-between">
    <div class="flex align-center text-12 text-999">
      <div>
        <span>已选:</span>
        <span>（{{ websiteKeys.length }}）</span>
      </div>
      <div>
        <span class="mr-8">全选</span>
        <a-checkbox />
      </div>
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
import { websiteList } from '../../data/curd';
import { websiteKeys, websiteQuery } from '../../data/table';

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
  z-index: 5;
  line-height: 36px;
}
</style>
