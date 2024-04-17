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
        <a-form-item label="网页URL" name="url">
          <a-input-search
            placeholder="请输入网页URL"
            v-model:value="websiteForm.url"
            @search="search"
          >
            <template #prefix>
              <div class="system-subtitle">http(s)://</div>
            </template>
          </a-input-search>
          <div class="system-subtitle mt-4">
            <InfoCircleFilled />
            点击搜索能自动获取网页信息
          </div>
        </a-form-item>

        <a-form-item label="网页名称" name="name">
          <a-input placeholder="请输入网页名称" v-model:value="websiteForm.name"></a-input>
        </a-form-item>
        <a-form-item label="网页描述" name="description">
          <a-textarea
            placeholder="请输入网页描述"
            :auto-size="{
              minRows: 5,
            }"
            :maxlength="140"
            show-count
            v-model:value="websiteForm.description"
          ></a-textarea>
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
import { createWebsite, getSiteInfo, updateWebsite } from '@/api/modules/system/website/website';
import SystemModal from '@/components/modal/SysModal.vue';
import { response } from '@/utils/table/table';
import { message } from 'ant-design-vue';
import { websiteList } from '../../data/curd';
import { websiteForm, websiteRules, websiteShowForm } from '../../data/form';
import { typeOptions } from '../../data/options';

const loading = ref(false);

/* 获取精确域名 */
const extractDomain = (url: string): string => {
  try {
    const domain = new URL(url).hostname;
    const parts = domain.split('.');
    if (parts.length > 2) {
      return parts.slice(-2).join('.');
    }
    return domain;
  } catch (error) {
    console.error('Invalid URL:', error);
    return '';
  }
};

const search = async () => {
  if (websiteForm.value.url) {
    let url = extractDomain(websiteForm.value.url);
    try {
      const { data } = await getSiteInfo(url);
      if (data.data && url) {
        websiteForm.value.description = data.data.description;
        websiteForm.value.name = data.data.title;
      }
    } catch (error) {
      message.warn('获取失败，请手动填写信息');
    }
  }
};
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
