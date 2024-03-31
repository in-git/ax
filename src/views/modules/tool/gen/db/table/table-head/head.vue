<template>
  <TableHead title="待导入的列表">
    <div class="flex justify-between">
      <div class="flex gc-4 align-center">
        <a-tooltip title="刷新">
          <a-button type="link" @click="dbList">
            <ReloadOutlined />
          </a-button>
        </a-tooltip>
        <a-divider type="vertical" />
        <a-input-search allow-clear @search="dbList"></a-input-search>
      </div>
    </div>
    <div class="flex">
      <FieldVue :columns="codeColumns" :module-name="dbTable.moduleName" />
    </div>
  </TableHead>
</template>

<script setup lang="ts">
import FieldVue from '@/views/components/table/Field.vue';
import type { ReloadOutlined } from '@ant-design/icons-vue';
import { dbList } from '../../data/curd';

import { codeColumns } from '../../../data/column';
import { dbTable } from '../../data/table';
</script>

<style lang="scss" scoped></style>
