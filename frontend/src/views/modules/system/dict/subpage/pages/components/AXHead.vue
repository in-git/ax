<template>
  <a-card class="table__head">
    <template #title>
      <h3 class="text-14">字典数据</h3>
    </template>

    <a-flex class="mb-12" :gap="12" wrap="wrap">
      <div>
        <a-input
          @blur="dataList"
          v-model:value="dataQuery.dictType"
          style="width: 160px"
          placeholder="请输入字典标签"
          allow-clear
        ></a-input>
      </div>

      <a-button type="primary" @click="dataList">搜索</a-button>
    </a-flex>

    <a-flex justify="space-between" :align="'center'">
      <a-flex justify="space-between" :align="'center'">
        <a-flex :align="'center'" :gap="4">
          <div v-perm="'system:data:add'">
            <a-tooltip title="新建">
              <a-button type="primary" @click="dataCreate">
                <PlusOutlined />
              </a-button>
            </a-tooltip>
          </div>

          <div v-perm="'system:data:edit'">
            <a-tooltip title="编辑">
              <a-button type="link" @click="dataEdit()" :disabled="dataKeys.length !== 1">
                <EditOutlined />
              </a-button>
            </a-tooltip>
          </div>

          <a-tooltip title="刷新">
            <a-button type="link" @click="dataList">
              <ReloadOutlined />
            </a-button>
          </a-tooltip>
        </a-flex>
      </a-flex>
      <a-flex>
        <div v-perm="'system:data:export'">
          <a-tooltip title="导出">
            <a-button type="link" @click="dataExport">
              <ExportOutlined />
            </a-button>
          </a-tooltip>
        </div>

        <div v-perm="'system:data:remove'">
          <a-popconfirm
            title="确定要删除吗"
            :disabled="dataKeys.length === 0"
            placement="bottomRight"
            @confirm="dataDelete()"
          >
            <a-tooltip title="批量删除">
              <a-button danger type="link" :disabled="dataKeys.length === 0">
                <DeleteOutlined />
              </a-button>
            </a-tooltip>
          </a-popconfirm>
        </div>

        <FieldVue :columns="dataColumns" :module-name="dataTable.moduleName" />
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
import { dataColumns } from '../../data/column';
import { dataCreate, dataDelete, dataEdit, dataExport, dataList } from '../../data/curd';
import {} from '../../data/options';
import { dataKeys, dataQuery, dataTable, viewMode } from '../../data/table';
</script>

<style lang="scss" scoped></style>
