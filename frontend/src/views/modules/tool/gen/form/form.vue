<template>
  <a-form
    :model="codeFormData.info"
    :wrapper-col="{ span: 8 }"
    :label-col="{
      span: 4,
    }"
    @finish="submit"
  >
    <SystemModal title="生成信息编辑" v-model:visible="codeShowForm" w="95%" h="95%">
      <div class="h-100 flex flex-col" style="overflow: hidden">
        <div class="flex-1 p-8">
          <a-tabs tab-position="left" class="h-100">
            <a-tab-pane key="base-info">
              <DatabaseInfo></DatabaseInfo>
              <template #tab>
                <DatabaseFilled />
                SQL配置
              </template>
            </a-tab-pane>
            <a-tab-pane key="generate-info">
              <BackendInfo></BackendInfo>
              <template #tab>
                <CodeOutlined />
                后端配置
              </template>
            </a-tab-pane>

            <a-tab-pane key="field-info">
              <FiledInfo></FiledInfo>
              <template #tab>
                <RobotFilled />
                字段配置
              </template>
            </a-tab-pane>
          </a-tabs>
        </div>
        <FormFooter :loading="loading" justify="center" />
      </div>
    </SystemModal>
  </a-form>
</template>

<script setup lang="ts">
import { updateCode } from '@/api/modules/tool/gen/gen';
import SystemModal from '@/components/modal/SysModal.vue';
import { response } from '@/utils/table/table';
import { CodeOutlined, RobotFilled, type DatabaseFilled } from '@ant-design/icons-vue';
import { codeFormData, codeShowForm } from '../data/form';
import BackendInfo from './backend-info/BackendInfo.vue';
import DatabaseInfo from './database-info/DatabaseInfo.vue';
import FiledInfo from './field-info/FieldInfo.vue';
const loading = ref(false);

const submit = async () => {
  loading.value = true;
  await response(updateCode, codeFormData.value.info);
  codeShowForm.value = false;
  loading.value = false;
};
</script>
