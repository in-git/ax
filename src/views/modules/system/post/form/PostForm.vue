<template>
  <SystemModal v-model:visible="showPostForm" title="Post config">
    <div class="p-12">
      <a-row>
        <a-col :span="12" :offset="6">
          <a-row>
            <a-col :span="14" :offset="10">
              <div class="text-center mb-24">
                <img :src="postPng" width="48" />
              </div>
            </a-col>
          </a-row>

          <a-form
            :model="postForm"
            :wrapper-col="{ span: 16, offset: 2 }"
            :label-col="{
              span: 8,
            }"
          >
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
            <a-row>
              <a-col :span="14" :offset="10">
                <a-button type="primary" block>Submit</a-button>
              </a-col>
            </a-row>
          </a-form>
        </a-col>
      </a-row>
    </div>
  </SystemModal>
  <div class="post-form"></div>
</template>

<script setup lang="ts">
import postPng from '@/assets/system/post.png';
import SystemModal from '@/components/modal/SysModal.vue';
import { statusOptions } from '@/global/options/system';
import { postForm, showPostForm } from './data';
</script>

<style lang="scss" scoped></style>
