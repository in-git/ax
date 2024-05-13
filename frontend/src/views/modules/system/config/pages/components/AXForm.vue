<template>
  <a-form
    :rules="configRules"
    :model="configForm"
    @finish="submit"
    :wrapper-col="{ span: 8, offset: 1 }"
    :label-col="{ span: 4, offset: 4 }"
  >
    <SystemModal title="参数配置" v-model:visible="configShowForm">
      <a-card title="编辑/新增">
        <a-form-item label="参数名称" name="configName">
          <a-input placeholder="请输入参数名称" v-model:value="configForm.configName"></a-input>
        </a-form-item>
        <a-form-item label="参数键名" name="configKey">
          <a-input placeholder="请输入参数键名" v-model:value="configForm.configKey"></a-input>
        </a-form-item>
        <a-form-item label="参数键值" name="configValue">
          <a-textarea
            placeholder="请输入参数键值"
            v-model:value="configForm.configValue"
          ></a-textarea>
        </a-form-item>
        <a-form-item label="系统内置" name="configType">
          <a-radio-group
            v-model:value="configForm.configType"
            class="w-100"
            placeholder="请选择系统内置"
            allow-clear
            @change="configList"
            :options="configTypeOptions"
          ></a-radio-group>
        </a-form-item>
        <a-form-item label="备注" name="remark">
          <a-textarea placeholder="请输入备注" v-model:value="configForm.remark"></a-textarea>
        </a-form-item>
        <template #extra>
          <a-button htmlType="submit" type="primary" :loading="loading" block>保存</a-button>
        </template>
      </a-card>
    </SystemModal>
  </a-form>
</template>

<script setup lang="ts">
import { createConfig, updateConfig } from '@/api/modules/system/config/config';
import SystemModal from '@/components/modal/SysModal.vue';
import { response } from '@/utils/table/table';
import { configList } from '../../data/curd';
import { configForm, configRules, configShowForm } from '../../data/form';
import { configTypeOptions } from '../../data/options';

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
  configShowForm.value = false;
};
</script>

<style lang="scss" scoped></style>
