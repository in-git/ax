<template>
  <TableHead title="数据库列表">
    <div class="flex justify-between">
      <div class="flex gc-4 align-center">
        <a-tooltip title="AI代码生成">
          <a-button type="primary" :disabled="codeKeys.length === 0" @click="openAiGen = true">
            AI代码生成
          </a-button>
        </a-tooltip>
        <a-tooltip title="导入">
          <a-button @click="showDbForm = true" type="link">
            <ImportOutlined />
            导入
          </a-button>
        </a-tooltip>

        <a-tooltip title="编辑">
          <a-button type="link" @click="editCode()" :disabled="codeKeys.length !== 1">
            <EditOutlined />
          </a-button>
        </a-tooltip>
        <a-tooltip title="刷新">
          <a-button type="link" @click="codeList">
            <ReloadOutlined />
          </a-button>
        </a-tooltip>
        <a-divider type="vertical" />
        <a-input-search allow-clear @search="codeList"></a-input-search>
      </div>
    </div>
    <div class="flex">
      <a-popconfirm
        title="确定要删除吗"
        placement="bottomRight"
        @confirm="codeDelete()"
        :disabled="codeKeys.length === 0"
      >
        <a-button danger type="link" :disabled="codeKeys.length === 0">
          <DeleteOutlined />
        </a-button>
      </a-popconfirm>
      <FieldVue :columns="codeColumns" :module-name="codeTable.moduleName" />
    </div>
  </TableHead>
</template>

<script setup lang="ts">
import { batchGenCode } from '@/api/modules/tool/gen/gen';
import { response } from '@/utils/table/table';
import FieldVue from '@/views/components/table/Field.vue';
import type { DeleteOutlined, ReloadOutlined } from '@ant-design/icons-vue';
import { codeColumns } from '../../data/column';
import { codeDelete, codeList, editCode } from '../../data/curd';
import { openAiGen, showDbForm } from '../../data/form';
import { codeKeys, codeTable } from '../../data/table';

const download = () => {
  response(batchGenCode, codeKeys.value);
};
</script>

<style lang="scss" scoped></style>
