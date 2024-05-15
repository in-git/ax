<template>
  <a-card class="ax_sticky_top">
    <template #title>
      <h3 class="text-14">字典类型</h3>
    </template>

    <a-flex class="mb-12" :gap="12" wrap="wrap">
      <div>
        <a-input
          @blur="typeList"
          v-model:value="typeQuery.dictName"
          style="width: 160px"
          placeholder="请输入字典名称"
          allow-clear
        ></a-input>
      </div>
      <div>
        <a-input
          @blur="typeList"
          v-model:value="typeQuery.dictType"
          style="width: 160px"
          placeholder="请输入字典类型"
          allow-clear
        ></a-input>
      </div>
      <div>
        <a-input
          @blur="typeList"
          v-model:value="typeQuery.status"
          style="width: 160px"
          placeholder="请输入状态（0正常 1停用）"
          allow-clear
        ></a-input>
      </div>
      <a-button type="primary" @click="typeList">搜索</a-button>
    </a-flex>

    <a-flex justify="space-between" :align="'center'">
      <a-flex justify="space-between" :align="'center'">
        <a-flex :align="'center'" :gap="4">
          <div v-perm="'system:type:add'">
            <a-tooltip title="新建">
              <a-button type="primary" @click="typeCreate">
                <PlusOutlined />
              </a-button>
            </a-tooltip>
          </div>

          <div v-perm="'system:type:edit'">
            <a-tooltip title="编辑(双击)">
              <a-button type="link" @click="typeEdit()" :disabled="typeKeys.length !== 1">
                <EditOutlined />
              </a-button>
            </a-tooltip>
          </div>

          <a-tooltip title="刷新">
            <a-button type="link" @click="typeList">
              <ReloadOutlined />
            </a-button>
          </a-tooltip>
        </a-flex>
      </a-flex>
      <a-flex>
        <div v-perm="'system:type:export'">
          <a-tooltip title="导出">
            <a-button type="link" @click="typeExport">
              <ExportOutlined />
            </a-button>
          </a-tooltip>
        </div>

        <div v-perm="'system:type:remove'">
          <a-popconfirm
            title="确定要删除吗"
            :disabled="typeKeys.length === 0"
            placement="bottomRight"
            @confirm="typeDelete()"
          >
            <a-tooltip title="批量删除">
              <a-button danger type="link" :disabled="typeKeys.length === 0">
                <DeleteOutlined />
              </a-button>
            </a-tooltip>
          </a-popconfirm>
        </div>

        <FieldVue :columns="typeColumns" :module-name="typeTable.moduleName" />
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
import { typeColumns } from '../../data/column';
import { typeCreate, typeDelete, typeEdit, typeExport, typeList } from '../../data/curd';
import { typeKeys, typeQuery, typeTable, viewMode } from '../../data/table';
</script>

<style lang="scss" scoped></style>
