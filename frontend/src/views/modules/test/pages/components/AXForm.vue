<template>
  <a-form
     :rules="configRules"
     :model="configForm"
     @finish="submit"
     :wrapper-col="{ span: 8, offset: 1 }"
     :label-col="{ span: 4, offset: 4 }">
    <SystemModal title="参数配置" v-model:visible="configShowForm">
      <a-card title="编辑/新增" class="form__content">
           <a-form-item label="参数主键">
             <a-input placeholder="请输入参数主键" v-model:value="configForm.configId"></a-input>
           </a-form-item>
           <a-form-item label="参数名称">
             <a-input placeholder="请输入参数名称" v-model:value="configForm.configName"></a-input>
           </a-form-item>
           <a-form-item label="参数键名">
             <a-input placeholder="请输入参数键名" v-model:value="configForm.configKey"></a-input>
           </a-form-item>
           <a-form-item label="参数键值" name="configValue">
             <a-textarea placeholder="请输入参数键值" v-model:value="configForm.configValue"></a-textarea>
           </a-form-item>
           <a-form-item label="系统内置（Y是 N否）" name="configType">
             <a-select placeholder="请输入系统内置（Y是 N否）" v-model:value="configForm.configType">
             </a-select>
           </a-form-item>
           <a-form-item label="创建者">
             <a-input placeholder="请输入创建者" v-model:value="configForm.createBy"></a-input>
           </a-form-item>
           <a-form-item label="创建时间" name="createTime">
             <a-date-picker  class="w-100"></a-date-picker>
           </a-form-item>
           <a-form-item label="更新者">
             <a-input placeholder="请输入更新者" v-model:value="configForm.updateBy"></a-input>
           </a-form-item>
           <a-form-item label="更新时间" name="updateTime">
             <a-date-picker  class="w-100"></a-date-picker>
           </a-form-item>
           <a-form-item label="备注" name="remark">
             <a-textarea placeholder="请输入备注" v-model:value="configForm.remark"></a-textarea>
           </a-form-item>
          <a-row>
              <a-col :span="8" :offset="9">
                <a-button  htmlType="submit" type="primary" :loading="loading" block>保存</a-button>
              </a-col>
          </a-row>
         </a-card>
    </SystemModal>
  </a-form>
</template>

<script setup lang="ts">
import SystemModal from '@/components/modal/SysModal.vue';
import {
  configForm,
  configShowForm,
  configRules
} from '../../data/form';
import { response } from '@/utils/table/table';
import {  configList } from '../../data/curd';
import {
  createConfig,
  updateConfig} from
'@/api/modules/system/config/config';

const loading = ref(false)

const submit = async () => {
  loading.value = true
      if (configForm.value.configId) {
    await response(updateConfig, configForm.value);
  } else {
    await response(createConfig, configForm.value);
  }
  await configList();
  loading.value = false
  configShowForm.value = false;
};
</script>

<style lang="scss" scoped></style>
