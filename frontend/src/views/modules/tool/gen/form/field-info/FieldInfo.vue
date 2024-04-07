<template>
  <div class="mt-12" v-if="codeFormData.info">
    <div class="mb-12 flex align-center gc-12">
      <div>
        <a-button type="link">根目录</a-button>
      </div>
      <a-button type="primary">生成代码</a-button>
    </div>
    <a-table
      :columns="fieldColumns"
      row-key="capJavaField"
      :data-source="codeFormData.info.columns"
      :row-selection="{
        selectedRowKeys: fieldTable.selectedKeys,
        onChange,
      }"
      table-layout="fixed"
    ></a-table>
  </div>
</template>

<script setup lang="ts">
import { sendMsg } from '@/api/modules/external/chatgpt/chatgpt';
import { codeFormData } from '../../data/form';
import { fieldColumns } from './data/columns';
import { fieldTable } from './data/table';

const onChange = (keys: any[]) => {
  fieldTable.value.selectedKeys = keys;
};

const gpt = () => {
  sendMsg({
    messages: [],
    model: 'gpt-3.5-turbo',
    stream: false,
    temperature: 0,
    top_p: 0,
  });
};
console.log(codeFormData.value.info.columns);
</script>

<style lang="scss" scoped></style>
