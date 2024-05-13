<template>
  <a-card :bordered="false" :bodyStyle="{ padding: '4px 12px' }" class="card__footer">
    <a-flex justify="space-between" :align="'center'">
      <div>
        <span>已选:</span>
        <span>（{{ typeKeys.length }}）</span>
      </div>
      <a-pagination
        :total="typeQuery.total"
        :current="typeQuery.pageNum"
        :page-size="typeQuery.pageSize"
        show-size-changer
        @change="pageChange"
        show-quick-jumper
        show-less-items
      ></a-pagination>
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
import { typeList } from '../../data/curd';
import { typeKeys, typeQuery } from '../../data/table';

const pageChange = (page: number, pageSize: number) => {
  typeQuery.value.pageNum = page;
  typeQuery.value.pageSize = pageSize;
  typeList();
};
</script>

<style lang="scss" scoped></style>