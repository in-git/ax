<template>
  <a-form
    :rules="websiteRules"
    :model="websiteForm"
    @finish="submit"
    :wrapper-col="{ span: 8, offset: 1 }"
    :label-col="{ span: 4, offset: 4 }"
  >
    <SystemModal title="网页收藏" v-model:visible="websiteShowForm">
      <a-card title="编辑/新增">
        <a-form-item label="网页名称" name="name">
          <a-input placeholder="请输入网页名称" v-model:value="websiteForm.name"></a-input>
        </a-form-item>
        <a-form-item label="网页URL" name="url">
          <a-input placeholder="请输入网页URL" v-model:value="websiteForm.url"></a-input>
        </a-form-item>
        <a-form-item label="网页描述" name="description">
          <a-input placeholder="请输入网页描述" v-model:value="websiteForm.description"></a-input>
        </a-form-item>
        <a-form-item label="网页类型" name="type">
          <a-select
            v-model:value="websiteForm.type"
            class="w-100"
            placeholder="请选择网页类型"
            allow-clear
            @change="websiteList"
            :options="typeOptions"
          ></a-select>
        </a-form-item>
        <template #extra>
          <a-button htmlType="submit" type="primary" :loading="loading" block>保存</a-button>
        </template>
      </a-card>
    </SystemModal>
  </a-form>
</template>

<script setup lang="ts">
import { createWebsite, updateWebsite } from '@/api/modules/system/website/website';
import SystemModal from '@/components/modal/SysModal.vue';
import { response } from '@/utils/table/table';
import { websiteList } from '../../data/curd';
import { websiteForm, websiteRules, websiteShowForm } from '../../data/form';
import { typeOptions } from '../../data/options';

const loading = ref(false);

const submit = async () => {
  loading.value = true;
  if (websiteForm.value.websiteId) {
    await response(updateWebsite, websiteForm.value);
  } else {
    await response(createWebsite, websiteForm.value);
  }
  await websiteList();
  loading.value = false;
  websiteShowForm.value = false;
};
</script>

<style lang="scss" scoped></style>
