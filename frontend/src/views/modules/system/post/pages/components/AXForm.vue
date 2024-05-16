<template>
  <a-form
    :rules="postRules"
    :model="postForm"
    @finish="submit"
    :label-col="{ span: 6 }"
    label-align="left"
  >
    <a-modal
      :footer="false"
      title="岗位信息"
      v-model:open="postShowForm"
      get-container=".SystemPost"
    >
      <a-card title="编辑/新增" class="form__head">
        <template #extra>
          <a-button htmlType="submit" type="primary" :loading="loading" block>保存</a-button>
        </template>
        <a-form-item label="岗位编码" name="postCode">
          <a-input placeholder="请输入岗位编码" v-model:value="postForm.postCode">
            <template #addonAfter>
              <a-popover trigger="click">
                <BookOutlined />
                <template #content>
                  <Memo v-model:value="postForm.postCode" />
                </template>
              </a-popover>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item label="岗位名称" name="postName">
          <a-input placeholder="请输入岗位名称" v-model:value="postForm.postName">
            <template #addonAfter>
              <a-popover trigger="click">
                <BookOutlined />
                <template #content>
                  <Memo v-model:value="postForm.postName" />
                </template>
              </a-popover>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item label="显示顺序" name="postSort">
          <a-input placeholder="请输入显示顺序" v-model:value="postForm.postSort">
            <template #addonAfter>
              <a-popover trigger="click">
                <BookOutlined />
                <template #content>
                  <Memo v-model:value="postForm.postSort" />
                </template>
              </a-popover>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item label="状态" name="status">
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
      </a-card>
    </a-modal>
  </a-form>
</template>

<script setup lang="ts">
import { createPost, updatePost } from '@/api/modules/system/post/post';
import { response } from '@/utils/table/table';
import Memo from '@/views/selector/memo/Memo.vue';
import { postList } from '../../data/curd';
import { postForm, postRules, postShowForm } from '../../data/form';
import { statusOptions } from '../../data/options';

const loading = ref(false);

const submit = async () => {
  loading.value = true;
  if (postForm.value.postId) {
    await response(updatePost, postForm.value);
  } else {
    await response(createPost, postForm.value);
  }
  await postList();
  loading.value = false;
  postShowForm.value = false;
};
</script>

<style lang="scss" scoped></style>
