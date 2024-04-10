<template>
  <a-form
    :model="configForm"
    :wrapper-col="{ span: 12, offset: 1 }"
    :label-col="{ span: 4 }"
    @submit="submit"
  >
    <SystemModal w="60%" title="参数配置" v-model:visible="showConfigForm">
      <div class="h-100 flex flex-col">
        <a-row>
          <a-col :span="8" :offset="4">
            <div class="text-center">
              <img :src="formPng" width="128" alt="" />
            </div>
          </a-col>
        </a-row>
        <div class="flex-1 p-8">
          <div>
            <a-form-item label="参数名称" required name="configName">
              <a-input v-model:value="configForm.configName" placeholder="请输入配置名"></a-input>
            </a-form-item>
            <a-form-item label="参数键名" required name="configKey">
              <a-input v-model:value="configForm.configKey" placeholder="请输入键"></a-input>
            </a-form-item>
            <a-form-item label="参数键值" required name="configValue">
              <a-input v-model:value="configForm.configValue" placeholder="请输入键值"></a-input>
            </a-form-item>
            <a-form-item label="是否内置" required name="configType">
              <a-radio-group
                v-model:value="configForm.configType"
                :options="systemTypeOptions"
              ></a-radio-group>
            </a-form-item>

            <a-form-item label="参数备注">
              <a-textarea
                :autoSize="{
                  minRows: 2,
                  maxRows: 6,
                }"
                v-model:value="configForm.remark"
                placeholder="请输入备注"
              ></a-textarea>
            </a-form-item>

            <a-col :span="12" :offset="5">
              <div class="text-center">
                <a-button type="primary" :loading="loading" html-type="submit" block>提交</a-button>
              </div>
            </a-col>
          </div>
        </div>
      </div>
    </SystemModal>
  </a-form>
</template>

<script setup lang="ts">
import { createConfig, updateConfig } from '@/api/modules/system/config/config';
import SystemModal from '@/components/modal/SysModal.vue';
import { response } from '@/utils/table/table';
import formPng from '../assets/form.png';
import { configList } from '../data/curd';
import { configForm, showConfigForm } from '../data/form';
import { systemTypeOptions } from '../data/options';

const loading = ref(false);
const submit = async () => {
  loading.value = true;
  if (configForm.value.configId) {
    await response(updateConfig, configForm.value);
  } else {
    await response(createConfig, configForm.value);
  }
  await configList();
  loading.value = false;
  showConfigForm.value = false;
};
</script>

<style lang="scss" scoped></style>
