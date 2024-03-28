<template>
  <div>
    <TableHead title="岗位管理">
      <div class="flex gc-4">
        <a-button type="primary" @click="createPost">
          <PlusOutlined />
        </a-button>
        <a-button :disabled="postKeys.length !== 1" @click="editPost()">
          <EditOutlined />
        </a-button>
      </div>
    </TableHead>
    <SystemTable
      :table="postTable"
      :query="postQuery"
      :columns="postColumns"
      v-model:selected-keys="postKeys"
    >
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
    </SystemTable>
  </div>
</template>

<script setup lang="ts">
import TableHead from '@/components/table/table-head/TableHead.vue';
import SystemTable from '@/views/components/table/SystemTable.vue';
import { postColumns } from '../data/columns';
import { createPost, delPost, editPost, loadPostList } from '../data/curd';
import { postKeys, postQuery, postTable } from '../data/table';

onMounted(async () => {
  await loadPostList();
});
</script>

<style lang="scss" scoped></style>
