<template>
  <TableHead title="字典列表">
    <div class="flex justify-between">
      <div class="flex justify-between">
        <div class="flex gc-4 align-center">
          <a-tooltip title="新建">
            <a-button type="primary">
              <PlusOutlined />
            </a-button>
          </a-tooltip>
          <a-tooltip title="编辑">
            <a-button type="link" @click="dictEdit()" :disabled="dictKeys.length !== 1">
              <EditOutlined />
            </a-button>
          </a-tooltip>
          <a-tooltip title="刷新">
            <a-button type="link">
              <ReloadOutlined />
            </a-button>
          </a-tooltip>
          <a-divider type="vertical" />
          <a-input-search
            v-model:value="dictQuery.dictName"
            placeholder="请输入字典名称"
            allow-clear
            @search="dictList"
          ></a-input-search>
        </div>
      </div>
      <div>
        <a-popconfirm title="确定要删除吗" placement="bottomRight" @confirm="dictDelete()">
          <a-button danger type="link" :disabled="dictKeys.length === 0">
            <DeleteOutlined />
          </a-button>
        </a-popconfirm>
      </div>
    </div>
  </TableHead>
</template>

<script setup lang="ts">
import type { DeleteOutlined, ReloadOutlined } from '@ant-design/icons-vue';
import { dictDelete, dictEdit, dictList } from '../../data/curd';
import { dictKeys, dictQuery } from '../../data/table';
</script>

<style lang="scss" scoped></style>
