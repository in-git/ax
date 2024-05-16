<template>
  <a-card :bordered="false" :bodyStyle="{ padding: '4px 12px' }" class="ax_plain_card">
    <a-flex justify="space-between" :align="'center'">
      <div>
        <span>已选:</span>
        <span>（{{ menuKeys.length }}）</span>
      </div>
      <a-pagination
        :total="menuQuery.total"
        :current="menuQuery.pageNum"
        :page-size="menuQuery.pageSize"
        show-size-changer
        @change="pageChange"
        show-quick-jumper
        show-less-items
      ></a-pagination>
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
import { menuList } from '../../data/curd';
import { menuKeys, menuQuery } from '../../data/table';

const pageChange = (page: number, pageSize: number) => {
  menuQuery.value.pageNum = page;
  menuQuery.value.pageSize = pageSize;
  menuList();
};
</script>

<style lang="scss" scoped></style>