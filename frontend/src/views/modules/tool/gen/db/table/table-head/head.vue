<template>
  <a-card title="待导入的列表">
    <template #extra>
      <a-button @click="importDb()" type="primary">导入</a-button>
    </template>
    <a-flex justify="space-between">
      <a-flex :gap="4" :align="'center'">
        <a-tooltip title="刷新">
          <a-button type="link" @click="dbList">
            <ReloadOutlined />
          </a-button>
        </a-tooltip>
        <a-divider type="vertical" />
        <a-input-search allow-clear @search="dbList"></a-input-search>
      </a-flex>
      <a-flex>
        <FieldVue :columns="codeColumns" :module-name="dbTable.moduleName" />
      </a-flex>
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
import FieldVue from '@/views/components/table/Field.vue';
import type { ReloadOutlined } from '@ant-design/icons-vue';
import { codeColumns } from '../../../data/column';
import { dbList, importDb } from '../../data/curd';
import { dbTable } from '../../data/table';
</script>

<style lang="scss" scoped></style>
