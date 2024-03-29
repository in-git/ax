<template>
  <a-page-header
    title="字典数据列表"
    class="py-0 px-12"
    @back="editDictConfig = false"
  ></a-page-header>
  <div class="flex justify-between px-12 mb-12">
    <div class="flex justify-between">
      <div class="flex gc-4 align-center">
        <a-tooltip title="新建">
          <a-button type="primary">
            <PlusOutlined />
          </a-button>
        </a-tooltip>
        <a-tooltip title="编辑">
          <a-button type="link" @click="dictDataEdit()" :disabled="dictDataKeys.length !== 1">
            <EditOutlined />
          </a-button>
        </a-tooltip>
        <a-tooltip title="刷新">
          <a-button type="link" @click="listDictData">
            <ReloadOutlined />
          </a-button>
        </a-tooltip>
        <a-divider type="vertical" />
        <a-input-search allow-clear @search="listDictData"></a-input-search>
      </div>
    </div>
    <div>
      <a-popconfirm title="确定要删除吗" placement="bottomRight" @confirm="dictDataDelete()">
        <a-button danger type="link" :disabled="dictDataKeys.length === 0">
          <DeleteOutlined />
        </a-button>
      </a-popconfirm>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DeleteOutlined, ReloadOutlined } from '@ant-design/icons-vue';
import { editDictConfig } from '../../../data/form';
import { dictDataDelete, dictDataEdit, listDictData } from '../../data/curd';
import { dictDataKeys } from '../../data/table';
</script>

<style lang="scss" scoped></style>
