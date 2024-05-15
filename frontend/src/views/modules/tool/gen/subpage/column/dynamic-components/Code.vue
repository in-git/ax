<template>
  <div>
    <a-flex :align="'center'" class="step-head">
      <div class="system__icon" @click="goBack">
        <LeftOutlined />
      </div>
      <a-divider type="vertical"></a-divider>
      {{ currentStep.title }}
    </a-flex>
    <a-card :bordered="false">
      <a-form
        size="middle"
        :label-col="{ span: 8 }"
        :model="codeFormData.info"
        :rules="rules"
        @finish="finish"
      >
        <div class="p-12">
          <h3>配置生成的代码</h3>
          <div class="system__subtitle mt-12">这里的配置将会完全映射到代码中,请谨慎修改</div>
        </div>
        <a-divider />
        <a-row v-for="(item, key) in formItems" :key="key">
          <a-col :span="12">
            <a-form-item :label="item.label" :name="item.name">
              <a-input
                v-model:value="(codeFormData.info as any)[item.name]"
                :placeholder="`请输入${item.label}`"
                :maxLength="140"
                allow-clear
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <div class="system__subtitle pl-12">
              <info-circle-filled />
              {{ item.desc }}
            </div>
          </a-col>
        </a-row>
        <!-- 提交 -->
        <a-row>
          <a-col :span="9" :offset="3">
            <div class="text-right">
              <a-button @click="preview" class="mx-4">预览</a-button>
              <a-button htmlType="submit" type="primary">保存</a-button>
            </div>
          </a-col>
        </a-row>
      </a-form>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { previewCode } from '@/api/modules/tool/gen/gen';
import { getTempId, openWindow } from '@/global/window/window';
import type { Rule } from 'ant-design-vue/es/form/interface';
import { currentStep, nextStep } from '../data/config';
import { codeFormData } from '../data/data';
import PreviewVue from '../pages/Preview.vue';

const getCode: any = inject('code')!;
const formItems = [
  {
    label: '包路径',
    desc: `配置JAVA包路径,com.ax.text,生成的SERVICE,CONTROLLER等都会以这个路径导入`,
    name: 'packageName',
    maxLength: 16,
  },
  {
    label: '模块名',
    desc: ``,
    name: 'moduleName',
    maxLength: 48,
  },
  {
    label: '业务名',
    desc: ``,
    name: 'businessName',
    maxLength: 48,
  },
  {
    label: '功能名',
    desc: `影响前端的API的名称，后端Controller 的名称`,
    name: 'functionName',
    maxLength: 48,
  },
];
const preview = async () => {
  const code = getCode();
  const { data } = await previewCode(code);
  openWindow({
    title: '代码预览',
    component: markRaw(PreviewVue),
    data: data.data,
    id: getTempId(),
  });
};
const rules: Record<string, Rule[]> = {
  tableName: [
    {
      required: true,
    },
  ],
  functionAuthor: [
    {
      required: true,
    },
  ],
};

const goBack = () => {
  nextStep(1);
};
const finish = () => {};
</script>

<style lang="scss" scoped>
@import './common.scss';
.field-head {
  line-height: 36px;
  border-bottom: 1px solid #ddd;
  padding: 0 12px;
}
</style>
