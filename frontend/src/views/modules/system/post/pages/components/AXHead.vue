<template>
  <a-card class="ax_sticky_top">
    <template #title>
      <h3 class="text-14">岗位管理列表</h3>
    </template>

    <a-flex class="mb-12" :gap="12" wrap="wrap">
      <div>
        <a-input
          @blur="postList"
          v-model:value="postQuery.postCode"
          style="width: 160px"
          placeholder="请输入岗位编码"
          allow-clear
        ></a-input>
      </div>
      <div>
        <a-input
          @blur="postList"
          v-model:value="postQuery.postName"
          style="width: 160px"
          placeholder="请输入岗位名称"
          allow-clear
        ></a-input>
      </div>
      <div>
        <a-input
          @blur="postList"
          v-model:value="postQuery.postSort"
          style="width: 160px"
          placeholder="请输入显示顺序"
          allow-clear
        ></a-input>
      </div>
      <div>
        <a-select
          v-model:value="postQuery.status"
          style="width: 160px"
          placeholder="请选择状态"
          allow-clear
          @blur="postList"
          :options="statusOptions"
        ></a-select>
      </div>
      <a-button type="primary" @click="postList">搜索</a-button>
    </a-flex>

    <a-flex justify="space-between" :align="'center'">
      <a-flex justify="space-between" :align="'center'">
        <a-flex :align="'center'" :gap="4">
          <div v-perm="'system:post:add'">
            <a-tooltip title="新建">
              <a-button type="primary" @click="postCreate">
                <PlusOutlined />
              </a-button>
            </a-tooltip>
          </div>

          <div v-perm="'system:post:edit'">
            <a-tooltip title="编辑">
              <a-button type="link" @click="postEdit()" :disabled="postKeys.length !== 1">
                <EditOutlined />
              </a-button>
            </a-tooltip>
          </div>

          <a-tooltip title="刷新">
            <a-button type="link" @click="postList">
              <ReloadOutlined />
            </a-button>
          </a-tooltip>
        </a-flex>
      </a-flex>
      <a-flex>
        <div v-perm="'system:post:remove'">
          <a-popconfirm
            title="确定要删除吗"
            :disabled="postKeys.length === 0"
            placement="bottomRight"
            @confirm="postDelete()"
          >
            <a-tooltip title="批量删除">
              <a-button danger type="link" :disabled="postKeys.length === 0">
                <DeleteOutlined />
              </a-button>
            </a-tooltip>
          </a-popconfirm>
        </div>

        <FieldVue :columns="postColumns" :module-name="postTable.moduleName" />
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
import { postColumns } from '../../data/column';
import { postCreate, postDelete, postEdit, postList } from '../../data/curd';
import { statusOptions } from '../../data/options';
import { postKeys, postQuery, postTable, viewMode } from '../../data/table';
</script>

<style lang="scss" scoped></style>
