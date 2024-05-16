<template>
  <div>
    <a-form
      size="middle"
      :label-col="{ span: 8 }"
      :model="codeFormData.info"
      :rules="rules"
      @finish="next"
    >
      <TopTool>
        <template #left>
          <div class="system__icon">
            <HomeOutlined />
          </div>
        </template>
        <template #right>
          <a-button size="small" htmlType="submit" type="primary"><RightOutlined /></a-button>
        </template>
      </TopTool>

      <a-card :bordered="false" :body-style="{ padding: '12px' }">
        <div class="p-12">
          <h3>基础信息设置</h3>
          <div class="system__subtitle mt-12">这里的配置不会影响生成的代码的业务逻辑</div>
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
            <div class="text-right"></div>
          </a-col>
        </a-row>
      </a-card>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import type { Rule } from 'ant-design-vue/es/form/interface';
import { nextStep } from '../data/config';
import { codeFormData } from '../data/data';
import TopTool from './components/TopTool.vue';

codeFormData.value.info.functionAuthor;
const formItems = [
  {
    label: '表的别名',
    desc: `相当于表的别名,不会对数据库产生影响`,
    name: 'tableName',
    maxLength: 16,
  },
  {
    label: '作者名称',
    desc: `标注是谁创建/更新的`,
    name: 'functionAuthor',
    maxLength: 16,
  },
  {
    label: '描述信息',
    desc: `用于标识该表的作用,不会对数据库产生影响`,
    name: 'tableComment',
    maxLength: 50,
  },
  {
    label: '表的备注',
    desc: '如有特殊备注,在这里填写',
    name: 'remark',
    maxLength: 140,
  },
];
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

const next = () => {
  nextStep(1);
};
</script>

<style lang="scss" scoped>
@import './common.scss';

:deep(.ant-card) {
  box-shadow: none;
}
</style>
