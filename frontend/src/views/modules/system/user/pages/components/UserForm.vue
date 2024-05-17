<template>
  <a-modal
    :footer="false"
    width="700px"
    get-container=".SystemUser"
    v-model:open="userShowForm"
    title="用户中心"
  >
    <a-form
      :model="userForm"
      label-align="right"
      class="form"
      @finish="submit"
      :label-col="{
        span: 6,
      }"
      :wrapper-col="{
        offset: 2,
      }"
    >
      <a-card title="编辑用户信息">
        <template #extra>
          <a-button type="primary" :loading="menuTable.loading" htmlType="submit">保存</a-button>
        </template>
        <a-row :gutter="12">
          <a-col :span="12">
            <div class="p-8" title="基础信息">
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
            </div>
          </a-col>
          <a-col :span="12">
            <RightVue></RightVue>
          </a-col>
        </a-row>
      </a-card>
    </a-form>
  </a-modal>
</template>

<script setup lang="ts">
import { createUser, updateUser } from '@/api/modules/system/user/user';
import { sexOptions, statusOptions } from '@/global/options/system';
import { response } from '@/utils/table/table';
import { menuTable } from '../../../menu/data/table';
import { userList } from '../../data/curd';
import { userForm, userShowForm } from '../../data/form';
import RightVue from './right/Right.vue';

const submit = async () => {
  menuTable.value.loading = true;
  try {
    if (!userForm.value.userId) {
      await response(createUser, userForm.value);
    } else {
      await response(updateUser, userForm.value);
    }
    await userList();
    menuTable.value.loading = false;
    userShowForm.value = false;
  } catch (error) {
    menuTable.value.loading = false;
  }
};
</script>

<style lang="scss" scoped>
:deep(.ant-card) {
  box-shadow: none;
}
.form {
  overflow-y: auto;
  height: 100%;
}
</style>
