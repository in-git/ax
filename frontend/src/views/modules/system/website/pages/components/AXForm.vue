<template>
  <a-form
    :rules="websiteRules"
    :model="websiteForm"
    @finish="submit"
    :wrapper-col="{ span: 6, offset: 1 }"
    :label-col="{ span: 4 }"
  >
    <SystemModal title="网页收藏" v-model:visible="websiteShowForm">
      <a-card title="编辑/新增" class="form__content">
        <a-form-item label="网页名称">
          <a-input v-model:value="websiteForm.name"></a-input>
        </a-form-item>
        <a-form-item label="网页URL">
          <a-input v-model:value="websiteForm.url"></a-input>
        </a-form-item>
        <a-form-item label="网页描述">
          <a-input v-model:value="websiteForm.description"></a-input>
        </a-form-item>
        <a-form-item label="网页类型" name="type">
          <a-select v-model:value="websiteForm.type"></a-select>
        </a-form-item>
        <a-row>
          <a-col :span="6" :offset="5">
            <a-button htmlType="submit" type="primary" :loading="loading" block>保存</a-button>
          </a-col>
        </a-row>
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
