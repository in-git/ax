<template>
  <TableHead title="部门管理">
    <div class="flex justify-between">
      <div class="flex gc-4 align-center">
        <a-tooltip title="新建">
          <a-button type="primary" @click="deptCreate">
            <PlusOutlined />
          </a-button>
        </a-tooltip>
        <a-tooltip title="编辑">
          <a-button type="link" @click="deptEdit()" :disabled="deptKeys.length !== 1">
            <EditOutlined />
          </a-button>
        </a-tooltip>
        <a-tooltip title="刷新">
          <a-button type="link" @click="deptList">
            <ReloadOutlined />
          </a-button>
        </a-tooltip>
        <a-divider type="vertical" />
        <a-input-search allow-clear @search="deptList"></a-input-search>
      </div>
    </div>
    <div class="flex">
      <a-popconfirm
        title="确定要删除吗"
        placement="bottomRight"
        @confirm="deptDelete()"
        :disabled="deptKeys.length === 0"
      >
        <a-popconfirm title="确定要删除吗" placement="bottomRight" @confirm="deptDelete()">
          <a-tooltip title="批量删除">
            <a-button danger type="link" :disabled="deptKeys.length === 0">
              <DeleteOutlined />
            </a-button>
          </a-tooltip>
        </a-popconfirm>
      </a-popconfirm>
      <FieldVue :columns="deptColumns" module-name="test" />
    </div>
  </TableHead>
</template>

<script setup lang="ts">
import FieldVue from '@/views/components/table/Field.vue';
import type { DeleteOutlined, ReloadOutlined } from '@ant-design/icons-vue';
import { deptColumns } from '../../data/column';
import { deptCreate, deptDelete, deptEdit, deptList } from '../../data/curd';
import { deptKeys } from '../../data/table';
</script>

<style lang="scss" scoped></style>
