<template>
  <div>
    <TableHead title="岗位管理">
      <div class="flex gc-4">
        <a-button type="primary">
          <PlusOutlined />
        </a-button>
        <a-button :disabled="postKeys.length !== 1" @click="editPost()">
          <EditOutlined />
        </a-button>
      </div>
    </TableHead>
    <Table :table="postTable" :query="postQuery" v-model:selected-keys="postKeys">
      <template v-slot:default="{ value }">
        <template v-if="value.column.key === 'operation'">
          <a-dropdown-button trigger="click" @click="editPost(value.record.postId)">
            <template #overlay>
              <a-menu>
                <a-menu-item key="delete" @click="delPost(value.record.postId)">Delete</a-menu-item>
              </a-menu>
            </template>
            <EditOutlined />
          </a-dropdown-button>
        </template>
      </template>
    </Table>
  </div>
</template>

<script setup lang="ts">
import TableHead from '@/components/table/table-head/TableHead.vue';
import Table from '@/views/components/table/Table.vue';
import { delPost, editPost, loadPostList } from './curd';
import { postKeys, postQuery, postTable } from './data';

onMounted(async () => {
  await loadPostList();
});
</script>

<style lang="scss" scoped></style>
