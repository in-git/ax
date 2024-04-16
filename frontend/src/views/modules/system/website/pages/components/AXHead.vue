<template>
  <a-card class="table__head">
    <template #title>
      <h3 class="text-14">网页收藏列表</h3>
    </template>

    <a-flex class="mb-12" :gap="12" wrap="wrap">
      <div>
        <a-input
          @blur="websiteList"
          v-model:value="websiteQuery.name"
          style="width: 160px"
          placeholder="请输入网页名称"
          allow-clear
        ></a-input>
      </div>
      <div>
        <a-input
          @blur="websiteList"
          v-model:value="websiteQuery.url"
          style="width: 160px"
          placeholder="请输入网页URL"
          allow-clear
        ></a-input>
      </div>
      <div>
        <a-select
          v-model:value="websiteQuery.type"
          style="width: 160px"
          placeholder="请选择网页类型"
          allow-clear
          @blur="websiteList"
          :options="typeOptions"
        ></a-select>
      </div>
      <a-button type="primary" @click="websiteList">搜索</a-button>
    </a-flex>

    <a-flex justify="space-between" :align="'center'">
      <a-flex justify="space-between" :align="'center'">
        <a-flex :align="'center'" :gap="4">
          <div v-perm="'system:website:add'">
            <a-tooltip title="新建">
              <a-button type="primary" @click="websiteCreate">
                <PlusOutlined />
              </a-button>
            </a-tooltip>
          </div>

          <div v-perm="'system:website:edit'">
            <a-tooltip title="编辑">
              <a-button type="link" @click="websiteEdit()" :disabled="websiteKeys.length !== 1">
                <EditOutlined />
              </a-button>
            </a-tooltip>
          </div>

          <a-tooltip title="刷新">
            <a-button type="link" @click="websiteList">
              <ReloadOutlined />
            </a-button>
          </a-tooltip>
        </a-flex>
      </a-flex>
      <a-flex>
        <a-tooltip title="导出">
          <a-button type="link" @click="websiteExport">
            <ExportOutlined />
          </a-button>
        </a-tooltip>
        <div v-perm="'system:website:remove'">
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
        </div>

        <FieldVue :columns="websiteColumns" :module-name="websiteTable.moduleName" />
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
import { websiteColumns } from '../../data/column';
import {
  websiteCreate,
  websiteDelete,
  websiteEdit,
  websiteExport,
  websiteList,
} from '../../data/curd';
import { typeOptions } from '../../data/options';
import { viewMode, websiteKeys, websiteQuery, websiteTable } from '../../data/table';
</script>

<style lang="scss" scoped></style>
