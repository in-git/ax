<template>
  <a-card class="table__head">
    <template #title>
      <h3 class="text-14">公告列表</h3>
    </template>

    <a-flex class="mb-12" :gap="12" wrap="wrap">
      <div>
        <a-input
          @blur="noticeList"
          v-model:value="noticeQuery.noticeTitle"
          style="width: 160px"
          placeholder="请输入公告标题"
          allow-clear
        ></a-input>
      </div>
      <div>
        <a-select
          v-model:value="noticeQuery.noticeType"
          style="width: 160px"
          placeholder="请选择公告类型"
          allow-clear
          @blur="noticeList"
          :options="noticeTypeOptions"
        ></a-select>
      </div>
      <div>
        <a-input
          @blur="noticeList"
          v-model:value="noticeQuery.status"
          style="width: 160px"
          placeholder="请输入公告状态"
          allow-clear
        ></a-input>
      </div>
      <a-button type="primary" @click="noticeList">搜索</a-button>
    </a-flex>

    <a-flex justify="space-between" :align="'center'">
      <a-flex justify="space-between" :align="'center'">
        <a-flex :align="'center'" :gap="4">
          <div v-perm="'system:notice:add'">
            <a-tooltip title="新建">
              <a-button type="primary" @click="noticeCreate">
                <PlusOutlined />
              </a-button>
            </a-tooltip>
          </div>

          <div v-perm="'system:notice:edit'">
            <a-tooltip title="编辑">
              <a-button type="link" @click="noticeEdit()" :disabled="noticeKeys.length !== 1">
                <EditOutlined />
              </a-button>
            </a-tooltip>
          </div>

          <a-tooltip title="刷新">
            <a-button type="link" @click="noticeList">
              <ReloadOutlined />
            </a-button>
          </a-tooltip>
        </a-flex>
      </a-flex>
      <a-flex>
        <div v-perm="'system:notice:delete'">
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
        </div>

        <FieldVue :columns="noticeColumns" :module-name="noticeTable.moduleName" />
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
import { noticeColumns } from '../../data/column';
import { noticeCreate, noticeDelete, noticeEdit, noticeList } from '../../data/curd';
import { noticeTypeOptions } from '../../data/options';
import { noticeKeys, noticeQuery, noticeTable, viewMode } from '../../data/table';
</script>

<style lang="scss" scoped></style>
