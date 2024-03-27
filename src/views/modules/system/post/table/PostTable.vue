<template>
  <div>
    <TableHead title="岗位管理">
      <div>
        <a-button type="primary">
          <PlusOutlined />
        </a-button>
      </div>
    </TableHead>
    <Table :table="postTable" :query="postQuery" v-model:selected-keys="postKeys"></Table>
  </div>
</template>

<script setup lang="ts">
import TableHead from '@/components/table/table-head/TableHead.vue';
import Table from '@/views/components/table/Table.vue';
import { loadPostList } from './curd';
import { postKeys, postQuery, postTable } from './data';

onMounted(async () => {
  await loadPostList();
});
</script>

<style lang="scss" scoped></style>
