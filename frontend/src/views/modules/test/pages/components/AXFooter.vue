<template>
  <a-card :bordered="false" :bodyStyle="{ padding: '4px 12px' }" class="card__footer">
    <a-flex justify="space-between" :align="'center'">
      <div>
        <span>已选:</span>
        <span>（{{ configKeys.length }}）</span>
      </div>
      <a-pagination
        :total="configQuery.total"
        :current="configQuery.pageNum"
        :page-size="configQuery.pageSize"
        show-size-changer
        @change="pageChange"
        show-quick-jumper
        show-less-items
      ></a-pagination>
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
import { configList } from '../../data/curd';
import { configKeys, configQuery } from '../../data/table';

const pageChange = (page: number, pageSize: number) => {
  configQuery.value.pageNum = page;
  configQuery.value.pageSize = pageSize;
  configList();
};
</script>

<style lang="scss" scoped></style>