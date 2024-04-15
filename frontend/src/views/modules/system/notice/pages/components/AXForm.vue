<template>
  <a-form
    :rules="noticeRules"
    :model="noticeForm"
    @finish="submit"
    :wrapper-col="{ span: 8, offset: 1 }"
    :label-col="{ span: 4, offset: 4 }"
  >
    <SystemModal title="通知公告" v-model:visible="noticeShowForm">
      <a-card title="编辑/新增" class="form__content">
        <template #extra>
          <a-button type="primary" htmlType="submit">保存</a-button>
        </template>
        <a-flex justify="space-between" wrap="wrap" class="mb-8">
          <a-flex :gap="12" wrap="wrap">
            <a-input
              placeholder="请输入标题"
              v-model:value="noticeForm.noticeTitle"
              style="width: 200px"
            ></a-input>

            <a-radio-group v-model:value="noticeForm.status">
              <a-radio-button v-for="item in statusOptions" :value="item.value">
                {{ item.label }}
              </a-radio-button>
            </a-radio-group>
            <a-radio-group v-model:value="noticeForm.noticeType">
              <a-radio-button v-for="item in noticeTypeOptions" :value="item.value">
                {{ item.label }}
              </a-radio-button>
            </a-radio-group>
          </a-flex>
        </a-flex>

        <div class="flex-1">
          <quill-editor
            contentType="html"
            theme="snow"
            v-model:content="noticeForm.noticeContent"
            style="height: 390px"
          />
        </div>
      </a-card>
    </SystemModal>
  </a-form>
</template>

<script setup lang="ts">
import { createNotice, updateNotice } from '@/api/modules/system/notice/notice';
import SystemModal from '@/components/modal/SysModal.vue';
import { statusOptions } from '@/global/options/system';
import { response } from '@/utils/table/table';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { noticeList } from '../../data/curd';
import { noticeForm, noticeRules, noticeShowForm } from '../../data/form';
import { noticeTypeOptions } from '../../data/options';
const loading = ref(false);

const submit = async () => {
  loading.value = true;
  if (noticeForm.value.noticeId) {
    await response(updateNotice, noticeForm.value);
  } else {
    await response(createNotice, noticeForm.value);
  }
  await noticeList();
  loading.value = false;
  noticeShowForm.value = false;
};
</script>

<style lang="scss" scoped></style>
