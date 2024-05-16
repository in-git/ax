<template>
  <div>
    <a-form :label-col="{ span: 8 }" :model="codeFormData.info" :rules="rules" @finish="finish">
      <TopTool>
        <template #left>
          <div class="system__icon" @click="goBack">
            <LeftOutlined />
          </div>
        </template>
        <template #right>
          <a-button htmlType="submit" type="primary" size="small" :loading="loading">
            <template #icon>
              <SaveOutlined />
            </template>
            保存
          </a-button>
        </template>
      </TopTool>
      <a-card :bordered="false">
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
        <a-row>
          <a-col :span="12">
            <a-form-item label="上级菜单" name="parentMenuId">
              <a-tree-select
                v-model:value="codeFormData.info.parentMenuId"
                :field-names="{
                  value: 'menuId',
                  label: 'menuName',
                }"
                placeholder="请选择上级菜单"
                :tree-data="menuData"
                allowClear
              ></a-tree-select>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <div class="system__subtitle pl-12">
              <info-circle-filled />
              影响SQL生成,挂载的上级菜单
            </div>
          </a-col>
        </a-row>
      </a-card>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { getParentMenus } from '@/api/modules/system/menu/utils';
import { updateCode } from '@/api/modules/tool/gen/gen';
import { response } from '@/utils/table/table';
import type { Rule } from 'ant-design-vue/es/form/interface';
import { GenStepEnum, nextStep } from '../data/config';
import { codeFormData } from '../data/data';
import TopTool from './components/TopTool.vue';

const menuData = ref();
const loading = ref(false);

onMounted(async () => {
  menuData.value = await getParentMenus();
});

const goBack = () => {
  nextStep(GenStepEnum.FIELD);
};
const finish = async () => {
  loading.value = true;
  await response(updateCode, codeFormData.value.info);
  loading.value = false;
};
const formItems = [
  {
    label: '包路径',
    desc: `配置JAVA包路径,com.ax.text,生成的SERVICE,CONTROLLER等都会以这个路径导入`,
    name: 'packageName',
    maxLength: 16,
  },
  {
    label: 'JAVA类名',
    desc: `将会修改Java的类名`,
    name: 'className',
    maxLength: 48,
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
</script>

<style lang="scss" scoped>
.field-head {
  line-height: 36px;
  border-bottom: 1px solid #ddd;
  padding: 0 12px;
}
</style>
