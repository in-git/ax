<template>
  <TableHead title="参数设置">
    <div class="flex justify-between">
      <div class="flex gc-4 align-center">
        <a-tooltip title="新建" @click="createConfig">
          <a-button type="primary">
            <PlusOutlined />
          </a-button>
        </a-tooltip>
        <a-tooltip title="编辑">
          <a-button type="link" @click="editConfig()">
            <EditOutlined />
          </a-button>
        </a-tooltip>
        <a-tooltip title="刷新" @click="configList">
          <a-button type="link">
            <ReloadOutlined />
          </a-button>
        </a-tooltip>
        <a-divider type="vertical" />
        <a-input-search
          placeholder="请输入参数名"
          allow-clear
          v-model:value="configQuery.configName"
          @search="configList"
        ></a-input-search>
      </div>
    </div>
    <div class="flex align-center">
      <a-popconfirm title="确定要删除吗" placement="bottomRight" @confirm="delConfig()">
        <a-tooltip title="批量删除">
          <a-button danger type="link">
            <DeleteOutlined />
          </a-button>
        </a-tooltip>
      </a-popconfirm>
      <FiledVue v-model:columns="configColumns" :module-name="configTable.moduleName" />
    </div>
  </TableHead>
</template>

<script setup lang="ts">
import FiledVue from '@/views/components/table/Field.vue';
import type { DeleteOutlined, ReloadOutlined } from '@ant-design/icons-vue';
import { configColumns } from '../../data/column';
import { configList, createConfig, delConfig, editConfig } from '../../data/curd';
import { configQuery, configTable } from '../../data/table';
</script>

<style lang="scss" scoped></style>
