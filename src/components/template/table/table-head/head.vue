<template>
  <TableHead title="Untitled">
    <div class="flex justify-between">
      <div class="flex gc-4 align-center">
        <a-tooltip title="新建">
          <a-button type="primary" @click="__Create">
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
    <div class="flex">
      <a-popconfirm
        title="确定要删除吗"
        placement="bottomRight"
        @confirm="__Delete()"
        :disabled="__Keys.length === 0"
      >
        <a-popconfirm title="确定要删除吗" placement="bottomRight" @confirm="__Delete()">
          <a-tooltip title="批量删除">
            <a-button danger type="link" :disabled="__Keys.length === 0">
              <DeleteOutlined />
            </a-button>
          </a-tooltip>
        </a-popconfirm>
      </a-popconfirm>
      <FieldVue :columns="__Columns" module-name="test" />
    </div>
  </TableHead>
</template>

<script setup lang="ts">
import FieldVue from '@/views/components/table/Field.vue';
import type { DeleteOutlined, ReloadOutlined } from '@ant-design/icons-vue';
import { __Columns } from '../../data/column';
import { __Create, __Delete, __Edit, __List } from '../../data/curd';
import { __Keys } from '../../data/table';
</script>

<style lang="scss" scoped></style>
