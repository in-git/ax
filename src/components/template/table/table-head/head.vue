<template>
  <TableHead title="Untitled">
    <div class="flex justify-between">
      <div class="flex justify-between">
        <div class="flex gc-4 align-center">
          <a-tooltip title="新建">
            <a-button type="primary">
              <PlusOutlined />
            </a-button>
          </a-tooltip>
          <a-tooltip title="编辑">
            <a-button type="link" @click="__Edit()" :disabled="__Keys.length !== 1">
              <EditOutlined />
            </a-button>
          </a-tooltip>
          <a-tooltip title="刷新">
            <a-button type="link" @click="__List">
              <ReloadOutlined />
            </a-button>
          </a-tooltip>
          <a-divider type="vertical" />
          <a-input-search allow-clear @search="__List"></a-input-search>
        </div>
      </div>
      <div>
        <a-popconfirm title="确定要删除吗" placement="bottomRight" @confirm="__Delete()">
          <a-button danger type="link" :disabled="__Keys.length === 0">
            <DeleteOutlined />
          </a-button>
        </a-popconfirm>
      </div>
    </div>
  </TableHead>
</template>

<script setup lang="ts">
import type { DeleteOutlined, ReloadOutlined } from '@ant-design/icons-vue';
import { __Delete, __Edit, __List } from '../../data/curd';
import { __Keys } from '../../data/table';
</script>

<style lang="scss" scoped></style>
