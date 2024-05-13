<template>
  <a-card :bordered="false" :bodyStyle="{ padding: '4px 12px' }" class="card__footer">
    <a-flex justify="space-between" :align="'center'">
      <div>
        <span>已选:</span>
        <span>（{{ jobKeys.length }}）</span>
      </div>
      <a-pagination
        :total="jobQuery.total"
        :current="jobQuery.pageNum"
        :page-size="jobQuery.pageSize"
        show-size-changer
        @change="pageChange"
        show-quick-jumper
        show-less-items
      ></a-pagination>
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
import { jobList } from '../../data/curd';
import { jobKeys, jobQuery } from '../../data/table';

const pageChange = (page: number, pageSize: number) => {
  jobQuery.value.pageNum = page;
  jobQuery.value.pageSize = pageSize;
  jobList();
};
</script>

<style lang="scss" scoped></style>