<template>
  <div>
    <div class="mb-12 flex align-center justify-right gc-12">
      <div>
        <a-button type="link">根目录</a-button>
      </div>
      <a-popover trigger="click" placement="bottomRight">
        <a-button type="primary">生成代码</a-button>
        <template #content>
          <div>
            <div class="text-999 mb-12">根据选中的字段生成接口</div>
            <ul class="generate">
              <li @click="genInterface">生成接口</li>
              <li @click="genFiles">生成文件</li>
            </ul>
          </div>
        </template>
      </a-popover>
    </div>
  </div>
</template>

<script setup lang="ts">
import { generateFiles, generateInterface } from '@/api/node/system/gen';
import useAIStore from '@/store/AI/AI';
import { codeFormData } from '../../../data/form';

const gpt = useAIStore();
const params = {
  gptConfig: {
    model: gpt.$state.qianFan.model,
    stream: false,
    temperature: gpt.$state.qianFan.temperature,
    top_p: gpt.$state.qianFan.top_p,
    token: gpt.$state.qianFan.token,
    baseUrl: gpt.$state.qianFan.baseUrl,
  },
  tableConfig: {
    tableName: codeFormData.value.info.tableName,
    moduleName: codeFormData.value.info.moduleName,
    serviceName: codeFormData.value.info.businessName,
    columns: codeFormData.value.info.columns.map(e => {
      return {
        columnName: e.columnName,
        columnType: e.columnType,
      };
    }),
  },
};
const genInterface = async () => {
  const { data } = await generateInterface(params);
  console.log(data);
};

const genFiles = () => {
  generateFiles(params);
};
</script>

<style lang="scss" scoped>
.generate {
  width: 200px;
  li {
    padding: 4px 8px;
    cursor: pointer;
    &:hover {
      background-color: #f8f8f8;
    }
  }
}
</style>
