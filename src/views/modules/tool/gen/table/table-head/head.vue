<template>
  <TableHead title="数据表列表">
    <div class="flex justify-between">
      <div class="flex gc-4 align-center">
        <a-tooltip title="新建">
          <a-button type="primary" @click="createCode">
            <PlusOutlined />
          </a-button>
        </a-tooltip>
        <a-tooltip title="编辑">
          <a-button type="link" @click="editCode()" :disabled="codeKeys.length !== 1">
            <EditOutlined />
          </a-button>
        </a-tooltip>
        <a-tooltip title="刷新">
          <a-button type="link" @click="codeList">
            <ReloadOutlined />
          </a-button>
        </a-tooltip>
        <a-divider type="vertical" />
        <a-input-search allow-clear @search="codeList"></a-input-search>
      </div>
    </div>
    <div class="flex">
      <a-popconfirm
        title="确定要删除吗"
        placement="bottomRight"
        @confirm="codeDelete()"
        :disabled="codeKeys.length === 0"
      >
        <a-button danger type="link" :disabled="codeKeys.length === 0">
          <DeleteOutlined />
        </a-button>
      </a-popconfirm>
      <FieldVue :columns="codeColumns" :module-name="codeTable.moduleName" />
    </div>
  </TableHead>
</template>

<script setup lang="ts">
import FieldVue from '@/views/components/table/Field.vue';
import type { DeleteOutlined, ReloadOutlined } from '@ant-design/icons-vue';
import { codeColumns } from '../../data/column';
import { codeDelete, codeList, createCode, editCode } from '../../data/curd';
import { codeKeys, codeTable } from '../../data/table';
</script>

<style lang="scss" scoped></style>
