<template>
  <a-card :bordered="false" :bodyStyle="{ padding: '4px 12px' }" class="ax_plain_card">
    <a-flex justify="space-between" :align="'center'">
      <div>
        <span>已选:</span>
        <span>（{{ userKeys.length }}）</span>
      </div>
      <a-pagination
        :total="userQuery.total"
        :current="userQuery.pageNum"
        :page-size="userQuery.pageSize"
        show-size-changer
        @change="pageChange"
        show-quick-jumper
        show-less-items
      ></a-pagination>
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
import { userList } from '../../data/curd';
import { userKeys, userQuery } from '../../data/table';

const pageChange = (page: number, pageSize: number) => {
  userQuery.value.pageNum = page;
  userQuery.value.pageSize = pageSize;
  userList();
};
</script>

<style lang="scss" scoped></style>