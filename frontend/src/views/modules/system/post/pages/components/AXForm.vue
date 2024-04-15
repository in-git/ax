<template>
  <a-form
     :rules="postRules"
     :model="postForm"
     @finish="submit"
     :wrapper-col="{ span: 8, offset: 1 }"
     :label-col="{ span: 4, offset: 4 }">
    <SystemModal title="岗位信息" v-model:visible="postShowForm">
      <a-card title="编辑/新增" class="form__content">
           <a-form-item label="岗位编码" name="postCode">
             <a-input placeholder="请输入岗位编码" v-model:value="postForm.postCode"></a-input>
           </a-form-item>
           <a-form-item label="岗位名称" name="postName">
             <a-input placeholder="请输入岗位名称" v-model:value="postForm.postName"></a-input>
           </a-form-item>
           <a-form-item label="显示顺序" name="postSort">
             <a-input placeholder="请输入显示顺序" v-model:value="postForm.postSort"></a-input>
           </a-form-item>
           <a-form-item label="状态" name="status" >
             <a-select
               v-model:value="postForm.status"
               class="w-100"
               placeholder="请选择状态"
               allow-clear
               @change="postList"
               :options="statusOptions"
             ></a-select>
            </a-form-item>
           <a-form-item label="备注" name="remark">
             <a-textarea placeholder="请输入备注" v-model:value="postForm.remark"></a-textarea>
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
   statusOptions,
} from '../../data/options';
import SystemModal from '@/components/modal/SysModal.vue';
import {
  postForm,
  postShowForm,
  postRules
} from '../../data/form';
import { response } from '@/utils/table/table';
import {  postList } from '../../data/curd';
import {
  createPost,
  updatePost} from
'@/api/modules/system/post/post';

const loading = ref(false)

const submit = async () => {
  loading.value = true
      if (postForm.value.postId) {
    await response(updatePost, postForm.value);
  } else {
    await response(createPost, postForm.value);
  }
  await postList();
  loading.value = false
  postShowForm.value = false;
};
</script>

<style lang="scss" scoped></style>
