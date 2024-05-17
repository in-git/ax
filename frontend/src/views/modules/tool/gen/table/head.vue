<template>
  <a-card class="ax_sticky_top mb-8" title="数据库列表">
    <a-flex :justify="'space-between'">
      <a-flex :justify="'center'">
        <a-flex :gap="4" :justify="'space-between'" :align="'center'">
          <a-tooltip title="导入数据库">
            <a-button @click="importDb" type="primary">
              <ImportOutlined />
              导入
            </a-button>
          </a-tooltip>
          <a-tooltip title="下载代码">
            <a-button type="link" @click="downloadCode" :disabled="codeKeys.length !== 1">
              <DownloadOutlined />
            </a-button>
          </a-tooltip>
          <a-tooltip title="编辑">
            <a-button type="link" @click="editTable()" :disabled="codeKeys.length !== 1">
              <EditOutlined />
            </a-button>
          </a-tooltip>
          <a-tooltip title="刷新">
            <a-button type="link" @click="codeList" :disabled="codeTable.loading">
              <ReloadOutlined />
            </a-button>
          </a-tooltip>
          <a-input-search
            v-model:value="codeQuery.tableName"
            placeholder="请输入表名"
            @search="codeList"
            allow-clear
          ></a-input-search>
        </a-flex>
      </a-flex>
      <FieldVue :columns="codeColumns" :module-name="codeTable.moduleName" />
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
import FieldVue from '@/views/components/table/Field.vue';
import type { ReloadOutlined } from '@ant-design/icons-vue';
import { codeColumns } from '../data/column';
import { codeList, downloadCode, editTable, importDb } from '../data/curd';

import { codeKeys, codeQuery, codeTable } from '../data/table';
</script>

<style lang="scss" scoped>
.ax_sticky_top {
  position: sticky;
  top: 0;
  z-index: 10;
}
</style>
