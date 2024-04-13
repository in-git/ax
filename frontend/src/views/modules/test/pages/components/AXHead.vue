<template>
  <a-card class="table__head">
    <template #title>
      <h3 class="text-14">网页收藏</h3>
    </template>
    <a-flex justify="space-between" :align="'center'">
      <div class="flex justify-between">
        <div class="flex gc-4 align-center">
          <a-tooltip title="新建">
            <a-button type="primary" @click="configCreate">
              <PlusOutlined />
            </a-button>
          </a-tooltip>
          <a-tooltip title="编辑">
            <a-button type="link" @click="configEdit()" :disabled="configKeys.length !== 1">
              <EditOutlined />
            </a-button>
          </a-tooltip>
          <a-tooltip title="刷新">
            <a-button type="link" @click="configList">
              <ReloadOutlined />
            </a-button>
          </a-tooltip>

          <a-divider type="vertical" />
          <a-input-search allow-clear @search="configList"></a-input-search>
        </div>
      </div>
      <div class="flex">
        <a-popconfirm
          title="确定要删除吗"
          :disabled="configKeys.length === 0"
          placement="bottomRight"
          @confirm="configDelete()"
        >
          <a-tooltip title="批量删除">
            <a-button danger type="link" :disabled="configKeys.length === 0">
              <DeleteOutlined />
            </a-button>
          </a-tooltip>
        </a-popconfirm>
        <FieldVue :columns="configColumns" :module-name="configTable.moduleName" />

        <div>
          <a-tooltip title="卡片模式" @click="viewMode = 'card'" v-if="viewMode === 'table'">
            <a-button type="link">
              <OrderedListOutlined />
            </a-button>
          </a-tooltip>

          <a-tooltip title="表格模式" @click="viewMode = 'table'" v-else>
            <a-button type="link">
              <AppstoreAddOutlined />
            </a-button>
          </a-tooltip>
        </div>
      </div>
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
import FieldVue from '@/views/components/table/Field.vue';
import {
  AppstoreAddOutlined,
  OrderedListOutlined,
  type DeleteOutlined,
  type ReloadOutlined,
} from '@ant-design/icons-vue';
import { configColumns } from '../../data/column';
import { configCreate, configDelete, configEdit, configList } from '../../data/curd';
import { viewMode, configKeys, configTable } from '../../data/table';
</script>

<style lang="scss" scoped></style>
