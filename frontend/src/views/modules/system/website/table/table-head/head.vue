<template>
  <TableHead title="网页收藏">
    <div class="flex justify-between">
      <div class="flex gc-4 align-center">
        <a-tooltip title="新建">
          <a-button type="primary" @click="websiteCreate">
            <PlusOutlined />
          </a-button>
        </a-tooltip>
        <a-tooltip title="编辑">
          <a-button type="link" @click="websiteEdit()" :disabled="websiteKeys.length !== 1">
            <EditOutlined />
          </a-button>
        </a-tooltip>
        <a-tooltip title="刷新">
          <a-button type="link" @click="websiteList">
            <ReloadOutlined />
          </a-button>
        </a-tooltip>
        <a-divider type="vertical" />
        <a-input-search allow-clear @search="websiteList"></a-input-search>
      </div>
    </div>
    <div class="flex">
      <a-popconfirm
        title="确定要删除吗"
        :disabled="websiteKeys.length === 0"
        placement="bottomRight"
        @confirm="websiteDelete()"
      >
        <a-tooltip title="批量删除">
          <a-button danger type="link" :disabled="websiteKeys.length === 0">
            <DeleteOutlined />
          </a-button>
        </a-tooltip>
      </a-popconfirm>
      <FieldVue :columns="websiteColumns" :module-name="websiteTable.moduleName" />
    </div>
  </TableHead>
</template>

<script setup lang="ts">
import FieldVue from '@/views/components/table/Field.vue';
import type { DeleteOutlined, ReloadOutlined } from '@ant-design/icons-vue';
import { websiteColumns } from '../../data/column';
import { websiteCreate, websiteDelete, websiteEdit, websiteList } from '../../data/curd';
import { websiteKeys, websiteTable } from '../../data/table';
</script>

<style lang="scss" scoped></style>
