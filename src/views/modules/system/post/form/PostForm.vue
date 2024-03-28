<template>
  <SystemModal v-model:visible="showPostForm" title="Post config">
    <div class="p-12">
      <a-row>
        <a-col :span="12" :offset="6">
          <div class="text-center">
            <img :src="postPng" width="48" />
          </div>

          <a-form :model="postForm" layout="vertical" @finish="submit">
            <a-form-item label="Post name" name="postName" required>
              <a-input
                v-model:value="postForm.postName"
                placeholder="Please enter post name"
              ></a-input>
            </a-form-item>
            <a-form-item label="Post code" name="postCode" required>
              <a-input
                v-model:value="postForm.postCode"
                placeholder="Please enter post code"
              ></a-input>
            </a-form-item>
            <a-form-item label="Sort" name="postSort" required>
              <a-input-number
                :min="0"
                class="w-100"
                placeholder="Sort"
                v-model:value="postForm.postSort"
              ></a-input-number>
            </a-form-item>
            <a-form-item label="Remark" name="remark" required>
              <a-textarea
                v-model:value="postForm.remark"
                placeholder="Please enter remark"
              ></a-textarea>
            </a-form-item>
            <a-form-item label="Status" name="status" required>
              <a-radio-group
                v-model:value="postForm.status"
                :options="statusOptions"
              ></a-radio-group>
            </a-form-item>
            <a-button type="primary" htmlType="submit">Submit</a-button>
          </a-form>
        </a-col>
      </a-row>
    </div>
  </SystemModal>
</template>

<script setup lang="ts">
import { addPost, updatePost } from '@/api/modules/system/post/post';
import postPng from '@/assets/system/post.png';
import SystemModal from '@/components/modal/SysModal.vue';
import { statusOptions } from '@/global/options/system';
import { response } from '@/utils/table/table';
import { postForm, showPostForm } from '../data/form';

const submit = () => {
  if (!postForm.value.postId) {
    response(addPost, postForm.value);
  } else {
    response(updatePost, postForm.value);
  }
};
</script>

<style lang="scss" scoped></style>
./form
