<template>
  <TableHead title="参数设置">
    <div class="flex justify-between">
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
          <a-segmented
            v-model:value="configQuery.configType"
            :options="systemTypeOptions"
            @change="configList"
          ></a-segmented>
        </div>
      </div>
      <div>
        <a-popconfirm title="确定要删除吗" placement="bottomRight" @confirm="delConfig()">
          <a-button danger type="link">
            <DeleteOutlined />
          </a-button>
        </a-popconfirm>
      </div>
    </div>
  </TableHead>
</template>

<script setup lang="ts">
import type { DeleteOutlined, ReloadOutlined } from '@ant-design/icons-vue';
import { configList, createConfig, delConfig, editConfig } from '../../data/curd';
import { systemTypeOptions } from '../../data/options';
import { configQuery } from '../../data/table';
</script>

<style lang="scss" scoped></style>
