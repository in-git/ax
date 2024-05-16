<template>
  <a-form
    :rules="feedbackRules"
    :model="feedbackForm"
    @finish="submit"
    :wrapper-col="{ span: 8, offset: 1 }"
    :label-col="{ span: 4, offset: 4 }"
  >
    <SystemModal title="系统反馈" v-model:visible="feedbackShowForm">
      <a-card title="编辑/新增">
        <a-form-item label="反馈内容" name="feedbackContent">
          <a-textarea
            placeholder="请输入反馈内容"
            v-model:value="feedbackForm.feedbackContent"
          ></a-textarea>
        </a-form-item>
        <a-form-item label="类型" name="type">
          <a-select placeholder="请输入类型" v-model:value="feedbackForm.type"></a-select>
        </a-form-item>
        <a-form-item label="用户昵称" name="nickname">
          <a-input placeholder="请输入用户昵称" v-model:value="feedbackForm.nickname"></a-input>
        </a-form-item>
        <template #extra>
          <a-button htmlType="submit" type="primary" :loading="loading" block>保存</a-button>
        </template>
      </a-card>
    </SystemModal>
  </a-form>
</template>

<script setup lang="ts">
import { createFeedback, updateFeedback } from '@/api/modules/system/feedback/feedback';
import SystemModal from '@/components/modal/SysModal.vue';
import { response } from '@/utils/table/table';
import { feedbackList } from '../../data/curd';
import { feedbackForm, feedbackRules, feedbackShowForm } from '../../data/form';

const loading = ref(false);

const submit = async () => {
  loading.value = true;
  if (feedbackForm.value.feedbackId) {
    await response(updateFeedback, feedbackForm.value);
  } else {
    await response(createFeedback, feedbackForm.value);
  }
  await feedbackList();
  loading.value = false;
  feedbackShowForm.value = false;
};
</script>

<style lang="scss" scoped></style>
