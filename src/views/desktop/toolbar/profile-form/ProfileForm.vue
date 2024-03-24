<template>
  <div class="profile-form system-module">
    <div class="px-8">
      <a-tabs>
        <a-tab-pane key="info" tab="Base info" v-if="userProfile">
          <a-form
            :model="userProfile"
            :wrapper-col="{
              span: 8,
            }"
            @finish="updateUserInfo"
            :label-col="{
              span: 4,
            }"
            label-align="left"
          >
            <a-card :bordered="false">
              <a-form-item label="Avatar">
                <a-avatar :size="64"></a-avatar>
              </a-form-item>
              <a-form-item label="Nickname" name="nickName" required>
                <a-input v-model:value="userProfile.nickName"></a-input>
              </a-form-item>
              <a-form-item label="Phone number" required>
                <a-input v-model:value="userProfile.phonenumber"></a-input>
              </a-form-item>
              <a-form-item label="Email" required name="email">
                <a-input v-model:value="userProfile.email"></a-input>
              </a-form-item>
              <a-form-item label="Sex" required name="sex">
                <a-radio-group
                  v-model:value="userProfile.sex"
                  :options="sexOptions"
                ></a-radio-group>
              </a-form-item>
              <a-row>
                <a-col :span="8" :offset="4">
                  <a-button htmlType="submit" type="primary">Submit</a-button>
                </a-col>
              </a-row>
            </a-card>
          </a-form>
        </a-tab-pane>
        <a-tab-pane key="auth" tab="Password">
          <a-form
            :model="passwordForm"
            :wrapper-col="{
              span: 8,
            }"
            :label-col="{
              span: 4,
            }"
            @finish="resetPassword"
          >
            <a-row>
              <a-col :span="8" :offset="4">
                <div class="text-center">
                  <img :src="authPng" width="64" />
                  <div class="text-24 text-999 text-bold">Update password</div>
                </div>
              </a-col>
            </a-row>
            <a-divider />
            <a-form-item required label="New password" name="newPassword">
              <a-input v-model:value="passwordForm.newPassword"></a-input>
            </a-form-item>
            <a-form-item required label="Old password" name="oldPassword">
              <a-input v-model:value="passwordForm.oldPassword"></a-input>
            </a-form-item>
            <a-row>
              <a-col :span="8" :offset="4">
                <a-button :loading="loading" html-type="submit" type="primary">Submit</a-button>
              </a-col>
            </a-row>
          </a-form>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { updatePassword, updateProfile } from '@/api/modules/system/user/user';
import { sexOptions } from '@/global/options/system';
import { message } from 'ant-design-vue';
import { userProfile } from '../profile/data';
import authPng from './auth.png';

const loading = ref(false);
const passwordForm = ref({
  oldPassword: '',
  newPassword: '',
});
const updateUserInfo = async () => {
  loading.value = true;
  if (!userProfile.value) return;
  const { data } = await updateProfile({
    nickName: userProfile.value.nickName,
    phonenumber: userProfile.value.phonenumber,
    email: userProfile.value.email,
    sex: userProfile.value.sex,
  });
  loading.value = false;
  message.success(data.msg);
};

const resetPassword = async () => {
  const { data } = await updatePassword(
    passwordForm.value.newPassword,
    passwordForm.value.oldPassword,
  );
};
</script>

<style lang="scss" scoped></style>
