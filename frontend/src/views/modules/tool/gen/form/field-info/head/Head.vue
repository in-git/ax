<template>
  <div>
    <div class="mb-12 flex align-center justify-right gc-12">
      <div>
        <a-button type="link" @click="test">根目录</a-button>
      </div>
      <a-button type="primary" @click="gpt">生成代码</a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { sendMsg } from '@/api/modules/external/chatgpt/chatgpt';
import { codeFormData } from '../../../data/form';
import { generateInterface } from '../data/presupposition';
import { fieldTable } from '../data/table';

const root = ref('');

const onChange = (keys: any[]) => {
  fieldTable.value.selectedKeys = keys;
};
const test = async () => {};
const gpt = async () => {
  const messages = generateInterface({
    tableName: codeFormData.value.info.tableName,
    columns: codeFormData.value.info.columns.map(e => {
      return {
        columnName: e.columnName,
        columnType: e.columnType,
      };
    }),
  });
  const { data } = await sendMsg([
    {
      role: 'user',
      content: messages,
    },
  ]);

  const response = data.choices[0];
  const content = response.message.content;
  console.log(content);
};
</script>

<style lang="scss" scoped></style>
