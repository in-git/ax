<template>
  <a-form
     :rules="memoRules"
     :model="memoForm"
     @finish="submit"
     :wrapper-col="{ span: 8, offset: 1 }"
     :label-col="{ span: 4, offset: 4 }">
    <SystemModal title="备忘录" v-model:visible="memoShowForm">
      <a-card title="编辑/新增">
           <a-form-item label="备忘录标题" name="title">
             <a-input placeholder="请输入备忘录标题" v-model:value="memoForm.title"></a-input>
           </a-form-item>
           <a-form-item label="备忘录的值" name="value">
             <a-input placeholder="请输入备忘录的值" v-model:value="memoForm.value"></a-input>
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
import {
} from '../../data/options';
import SystemModal from '@/components/modal/SysModal.vue';
import {
  memoForm,
  memoShowForm,
  memoRules
} from '../../data/form';
import { response } from '@/utils/table/table';
import {  memoList } from '../../data/curd';
import {
  createMemo,
  updateMemo} from
'@/api/modules/system/memo/memo';

const loading = ref(false)

const submit = async () => {
  loading.value = true
      if (memoForm.value.memoId) {
    await response(updateMemo, memoForm.value);
  } else {
    await response(createMemo, memoForm.value);
  }
  await memoList();
  loading.value = false
  memoShowForm.value = false;
};
</script>

<style lang="scss" scoped></style>
