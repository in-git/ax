<template>
  <SystemModal v-model:visible="showPostForm" title="岗位配置">
    <div class="p-12">
      <a-row>
        <a-col :span="12" :offset="6">
          <div class="text-center">
            <img :src="postPng" width="48" />
          </div>

          <a-form :model="postForm" layout="vertical" @finish="submit">
            <a-form-item label="岗位名称" name="postName" required>
              <a-input v-model:value="postForm.postName" placeholder="请输入岗位名称"></a-input>
            </a-form-item>
            <a-form-item label="岗位编码" name="postCode" required>
              <a-input v-model:value="postForm.postCode" placeholder="请输入岗位编码"></a-input>
            </a-form-item>
            <a-form-item label="排序" name="postSort" required>
              <a-input-number
                :min="0"
                class="w-100"
                placeholder="Sort"
                :max="99"
                v-model:value="postForm.postSort"
              ></a-input-number>
              <div>排序越小越靠前</div>
            </a-form-item>
            <a-form-item label="备注" name="remark" required>
              <a-textarea v-model:value="postForm.remark" placeholder="请输入备注信息"></a-textarea>
            </a-form-item>
            <a-form-item label="状态" name="status" required>
              <a-radio-group
                v-model:value="postForm.status"
                :options="statusOptions"
              ></a-radio-group>
            </a-form-item>
            <a-button type="primary" htmlType="submit">保存</a-button>
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
