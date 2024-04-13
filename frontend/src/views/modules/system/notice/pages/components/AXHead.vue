<template>
  <a-card class="table__head">
    <template #title>
      <h3 class="text-14">网页收藏</h3>
    </template>
    <a-flex justify="space-between" :align="'center'">
      <div class="flex justify-between">
        <div class="flex gc-4 align-center">
          <a-tooltip title="新建">
            <a-button type="primary" @click="noticeCreate">
              <PlusOutlined />
            </a-button>
          </a-tooltip>
          <a-tooltip title="编辑">
            <a-button type="link" @click="noticeEdit()" :disabled="noticeKeys.length !== 1">
              <EditOutlined />
            </a-button>
          </a-tooltip>
          <a-tooltip title="刷新">
            <a-button type="link" @click="noticeList">
              <ReloadOutlined />
            </a-button>
          </a-tooltip>

          <a-divider type="vertical" />
          <a-input-search allow-clear @search="noticeList"></a-input-search>
        </div>
      </div>
      <div class="flex">
        <a-popconfirm
          title="确定要删除吗"
          :disabled="noticeKeys.length === 0"
          placement="bottomRight"
          @confirm="noticeDelete()"
        >
          <a-tooltip title="批量删除">
            <a-button danger type="link" :disabled="noticeKeys.length === 0">
              <DeleteOutlined />
            </a-button>
          </a-tooltip>
        </a-popconfirm>
        <FieldVue :columns="noticeColumns" :module-name="noticeTable.moduleName" />

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
import { noticeColumns } from '../../data/column';
import { noticeCreate, noticeDelete, noticeEdit, noticeList } from '../../data/curd';
import { viewMode, noticeKeys, noticeTable } from '../../data/table';
</script>

<style lang="scss" scoped></style>
