<template>
  <a-form
    :rules="memoRules"
    :model="memoForm"
    @finish="submit"
    :wrapper-col="{ span: 8, offset: 1 }"
    :label-col="{ span: 4, offset: 4 }"
  >
    <SystemModal title="备忘录" v-model:visible="memoShowForm">
      <a-card title="编辑/新增">
        <a-form-item label="备忘录标题" name="title">
          <a-input placeholder="请输入备忘录标题" v-model:value="memoForm.title">
            <template #addonAfter>
              <a-popover trigger="click" title="快速录入">
                <BookOutlined />
                <template #content>
                  <Memo v-model:value="memoForm.title" />
                </template>
              </a-popover>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item label="备忘录的值" name="value">
          <a-textarea
            :auto-size="{ minRows: 6 }"
            placeholder="请输入备忘录的值"
            v-model:value="memoForm.value"
          ></a-textarea>
        </a-form-item>
        <a-form-item label="备忘录描述" name="description">
          <a-input placeholder="请输入备忘录描述" v-model:value="memoForm.description"></a-input>
        </a-form-item>
        <a-form-item label="附加值" name="extra">
          <a-input placeholder="请输入附加值" v-model:value="memoForm.extra"></a-input>
        </a-form-item>
        <template #extra>
          <a-button htmlType="submit" type="primary" :loading="loading" block>保存</a-button>
        </template>
      </a-card>
    </SystemModal>
  </a-form>
</template>

<script setup lang="ts">
import { createMemo, updateMemo } from '@/api/modules/system/memo/memo';
import SystemModal from '@/components/modal/SysModal.vue';
import { response } from '@/utils/table/table';
import Memo from '@/views/selector/memo/Memo.vue';
import { memoList } from '../../data/curd';
import { memoForm, memoRules, memoShowForm } from '../../data/form';
import {} from '../../data/options';

const loading = ref(false);

const submit = async () => {
  loading.value = true;
  if (memoForm.value.memoId) {
    await response(updateMemo, memoForm.value);
  } else {
    await response(createMemo, memoForm.value);
  }
  await memoList();
  loading.value = false;
  memoShowForm.value = false;
};
</script>

<style lang="scss" scoped></style>
