<template>
  <TableHead title="定时任务列表">
    <div class="flex justify-between">
      <div class="flex gc-4 align-center">
        <a-tooltip title="新建">
          <a-button type="primary" @click="jobCreate">
            <PlusOutlined />
          </a-button>
        </a-tooltip>
        <a-tooltip title="编辑">
          <a-button type="link" @click="jobEdit()" :disabled="jobKeys.length !== 1">
            <EditOutlined />
          </a-button>
        </a-tooltip>
        <a-tooltip title="刷新">
          <a-button type="link" @click="jobList">
            <ReloadOutlined />
          </a-button>
        </a-tooltip>
        <a-divider type="vertical" />
        <a-input-search allow-clear @search="jobList"></a-input-search>
      </div>
    </div>
    <div class="flex">
      <a-popconfirm
        title="确定要删除吗"
        placement="bottomRight"
        @confirm="jobDelete()"
        :disabled="jobKeys.length === 0"
      >
        <a-popconfirm title="确定要删除吗" placement="bottomRight" @confirm="jobDelete()">
          <a-tooltip title="批量删除">
            <a-button danger type="link" :disabled="jobKeys.length === 0">
              <DeleteOutlined />
            </a-button>
          </a-tooltip>
        </a-popconfirm>
      </a-popconfirm>
      <FieldVue :columns="jobColumns" module-name="test" />
    </div>
  </TableHead>
</template>

<script setup lang="ts">
import FieldVue from '@/views/components/table/Field.vue';
import type { DeleteOutlined, ReloadOutlined } from '@ant-design/icons-vue';
import { jobColumns } from '../../data/column';
import { jobCreate, jobDelete, jobEdit, jobList } from '../../data/curd';
import { jobKeys } from '../../data/table';
</script>

<style lang="scss" scoped></style>
