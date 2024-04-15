<template>
  <a-card :bordered="false" :bodyStyle="{ padding: '4px 12px' }" class="card__footer">
    <a-flex justify="space-between" :align="'center'">
      <div>
        <span>已选:</span>
        <span>（{{ galleryKeys.length }}）</span>
      </div>
      <a-pagination
        :total="galleryQuery.total"
        :current="galleryQuery.pageNum"
        :page-size="galleryQuery.pageSize"
        show-size-changer
        @change="pageChange"
        show-quick-jumper
        show-less-items
      ></a-pagination>
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
import { galleryList } from '../../data/curd';
import { galleryKeys, galleryQuery } from '../../data/table';

const pageChange = (page: number, pageSize: number) => {
  galleryQuery.value.pageNum = page;
  galleryQuery.value.pageSize = pageSize;
  galleryList();
};
</script>

<style lang="scss" scoped></style>