<template>
  <a-card :bordered="false" :bodyStyle="{ padding: '4px 12px' }" class="ax_plain_card">
    <a-flex justify="space-between" :align="'center'">
      <div>
        <span>已选:</span>
        <span>（{{ dataKeys.length }}）</span>
      </div>
      <a-pagination
        :total="dataQuery.total"
        :current="dataQuery.pageNum"
        :page-size="dataQuery.pageSize"
        show-size-changer
        @change="pageChange"
        show-quick-jumper
        show-less-items
      ></a-pagination>
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
import { dataList } from '../../data/curd';
import { dataKeys, dataQuery } from '../../data/table';

const pageChange = (page: number, pageSize: number) => {
  dataQuery.value.pageNum = page;
  dataQuery.value.pageSize = pageSize;
  dataList();
};
</script>

<style lang="scss" scoped></style>
