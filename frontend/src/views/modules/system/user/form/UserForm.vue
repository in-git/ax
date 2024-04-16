<template>
  <a-form
    :model="userForm"
    label-align="left"
    class="form"
    @finish="submit"
    :label-col="{
      span: 8,
    }"
  >
    <SystemModal
      w="90%"
      h="90%"
      v-model:visible="showUserForm"
      title="用户中心"
      @update:visible="showUserForm = false"
    >
      <div class="flex-1 p-8 h-100 flex flex-col">
        <a-card class="mb-8">
          <a-flex justify="space-between">
            编辑用户信息
            <div>
              <a-button type="primary" :loading="loading" htmlType="submit">保存</a-button>
            </div>
          </a-flex>
        </a-card>
        <a-row :gutter="12" class="flex-1">
          <a-col :span="12">
            <a-card title="基础信息">
              <a-form-item label="昵称" name="nickName" required>
                <a-input v-model:value="userForm.nickName" focused placeholder="请输入昵称" />
              </a-form-item>
              <a-form-item label="账号" name="userName" required>
                <a-input
                  :disabled="false"
                  v-model:value="userForm.userName"
                  placeholder="请输入账号"
                />
              </a-form-item>
              <template v-if="!userForm.userId">
                <!-- name="password" -->
                <a-form-item label="密码" required>
                  <a-input
                    type="password"
                    v-model:value="userForm.password"
                    placeholder="请输入密码"
                  />
                </a-form-item>
              </template>

              <a-form-item label="手机号码" name="phonenumber" :rules="{ len: 11 }">
                <a-input
                  :maxlength="11"
                  v-model:value="userForm.phonenumber"
                  placeholder="请输入手机号码"
                />
              </a-form-item>
              <a-form-item label="邮箱" name="email">
                <a-input v-model:value="userForm.email" type="email" placeholder="请输入邮箱" />
              </a-form-item>
              <a-form-item label="性别" name="sex">
                <a-radio-group v-model:value="userForm.sex" :options="sexOptions" />
              </a-form-item>
              <a-form-item label="状态" name="status">
                <a-radio-group v-model:value="userForm.status" :options="statusOptions" />
              </a-form-item>
              <a-form-item label="备注" name="remark">
                <a-textarea
                  placeholder="请输入备注信息"
                  :auto-size="{ minRows: 2, maxRows: 6 }"
                  v-model:value="userForm.remark"
                ></a-textarea>
              </a-form-item>
            </a-card>
          </a-col>
          <a-col :span="12">
            <RightVue></RightVue>
          </a-col>
        </a-row>
      </div>
    </SystemModal>
  </a-form>
</template>

<script setup lang="ts">
import { createUser, updateUser } from '@/api/modules/system/user/user';
import SystemModal from '@/components/modal/SysModal.vue';
import { sexOptions, statusOptions } from '@/global/options/system';
import { message } from 'ant-design-vue';
import { loadUserData } from '../data/curd';
import { showUserForm, userForm } from '../data/form';
import RightVue from './right/Right.vue';

const loading = ref(false);
const submit = async () => {
  loading.value = true;
  let result = '';
  try {
    if (!userForm.value.userId) {
      const { data } = await createUser(userForm.value);
      result = data.msg;
    } else {
      const { data } = await updateUser(userForm.value);
      result = data.msg;
    }
    loading.value = false;
    message.success(result);
    showUserForm.value = false;
    loadUserData();
  } catch (error) {
    loading.value = false;
  }
};
</script>

<style lang="scss" scoped>
::v-deep(.ant-card) {
  box-shadow: none;
}
.form {
  overflow-y: auto;
  height: 100%;
}
</style>
../data/curd ./form
