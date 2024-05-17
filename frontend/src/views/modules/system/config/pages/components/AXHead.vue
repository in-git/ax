<template>
  <a-card class="ax_sticky_top">
    <template #title>
      <h3 class="text-14">系统配置列表</h3>
    </template>

    <a-flex class="mb-12" :gap="12" wrap="wrap">
      <div>
        <a-input
          @press-enter="configList"
          v-model:value="configQuery.configName"
          style="width: 160px"
          placeholder="请输入参数名称"
          allow-clear
        ></a-input>
      </div>
      <div>
        <a-input
          @press-enter="configList"
          v-model:value="configQuery.configKey"
          style="width: 160px"
          placeholder="请输入参数键名"
          allow-clear
        ></a-input>
      </div>
      <div>
        系统内置
        <a-select
          v-model:value="configQuery.configType"
          style="width: 160px"
          allow-clear
          @change="configList"
          :options="configTypeOptions"
        ></a-select>
      </div>
      <a-button type="primary" @click="configList">搜索</a-button>
    </a-flex>

    <a-flex justify="space-between" :align="'center'">
      <a-flex justify="space-between" :align="'center'">
        <a-flex :align="'center'" :gap="4">
          <div v-perm="'system:config:add'">
            <a-tooltip title="新建">
              <a-button type="primary" @click="configCreate">
                <PlusOutlined />
              </a-button>
            </a-tooltip>
          </div>

          <div v-perm="'system:config:edit'">
            <a-tooltip title="编辑">
              <a-button type="link" @click="configEdit()" :disabled="configKeys.length !== 1">
                <EditOutlined />
              </a-button>
            </a-tooltip>
          </div>

          <a-tooltip title="刷新">
            <a-button type="link" @click="configList">
              <ReloadOutlined />
            </a-button>
          </a-tooltip>
        </a-flex>
      </a-flex>
      <a-flex>
        <div v-perm="'system:config:remove'">
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
        </div>

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
import { configColumns } from '../../data/column';
import { configCreate, configDelete, configEdit, configList } from '../../data/curd';
import { configTypeOptions } from '../../data/options';
import { configKeys, configQuery, configTable, viewMode } from '../../data/table';
</script>

<style lang="scss" scoped></style>
