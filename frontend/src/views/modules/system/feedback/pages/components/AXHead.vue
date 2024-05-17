<template>
  <a-card class="ax_sticky_top">
    <template #title>
      <h3 class="text-14">系统反馈</h3>
    </template>

    <a-flex class="mb-12" :gap="12" wrap="wrap">
      <div>
        <a-input
          @press-enter="feedbackList"
          v-model:value="feedbackQuery.feedbackContent"
          style="width: 160px"
          placeholder="请输入反馈内容"
          allow-clear
        ></a-input>
      </div>
      <div>
        <a-input
          @press-enter="feedbackList"
          v-model:value="feedbackQuery.nickname"
          style="width: 160px"
          placeholder="请输入用户昵称"
          allow-clear
        ></a-input>
      </div>
      <a-button type="primary" @click="feedbackList">搜索</a-button>
    </a-flex>

    <a-flex justify="space-between" :align="'center'">
      <a-flex justify="space-between" :align="'center'">
        <a-flex :align="'center'" :gap="4">
          <div v-perm="'system:feedback:add'">
            <a-tooltip title="新建">
              <a-button type="primary" @click="feedbackCreate">
                <PlusOutlined />
              </a-button>
            </a-tooltip>
          </div>

          <div v-perm="'system:feedback:edit'">
            <a-tooltip title="编辑">
              <a-button type="link" @click="feedbackEdit()" :disabled="feedbackKeys.length !== 1">
                <EditOutlined />
              </a-button>
            </a-tooltip>
          </div>

          <a-tooltip title="刷新">
            <a-button type="link" @click="feedbackList">
              <ReloadOutlined />
            </a-button>
          </a-tooltip>
        </a-flex>
      </a-flex>
      <a-flex>
        <div v-perm="'system:feedback:export'">
          <a-tooltip title="导出">
            <a-button type="link" @click="feedbackExport">
              <ExportOutlined />
            </a-button>
          </a-tooltip>
        </div>

        <div v-perm="'system:feedback:remove'">
          <a-popconfirm
            title="确定要删除吗"
            :disabled="feedbackKeys.length === 0"
            placement="bottomRight"
            @confirm="feedbackDelete()"
          >
            <a-tooltip title="批量删除">
              <a-button danger type="link" :disabled="feedbackKeys.length === 0">
                <DeleteOutlined />
              </a-button>
            </a-tooltip>
          </a-popconfirm>
        </div>

        <FieldVue :columns="feedbackColumns" :module-name="feedbackTable.moduleName" />
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
      </a-flex>
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
import { feedbackColumns } from '../../data/column';
import {
  feedbackCreate,
  feedbackDelete,
  feedbackEdit,
  feedbackExport,
  feedbackList,
} from '../../data/curd';

import { feedbackKeys, feedbackQuery, feedbackTable, viewMode } from '../../data/table';
</script>

<style lang="scss" scoped></style>
