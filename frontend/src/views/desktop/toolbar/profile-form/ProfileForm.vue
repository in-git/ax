<template>
  <a-card class="profile-form system__module">
    <div class="px-8">
      <a-tabs>
        <a-tab-pane key="info" tab="基础信息" v-if="userProfile">
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
              <a-form-item label="用户头像">
                <div class="flex gc-12">
                  <div>
                    <a-avatar
                      v-if="userProfile.avatar"
                      :src="getAvatar()"
                      alt="avatar"
                      :size="84"
                    />
                  </div>
                  <a-upload
                    v-model:file-list="fileList"
                    name="avatarfile"
                    list-type="picture-card"
                    class="avatar-uploader"
                    :show-upload-list="false"
                    :headers="headers"
                    :action="`${baseURL}system/user/profile/avatar`"
                    @change="refresh"
                  >
                    <div>
                      <loading-outlined v-if="loading"></loading-outlined>
                      <plus-outlined v-else></plus-outlined>
                      <div>上传头像</div>
                    </div>
                  </a-upload>
                </div>
              </a-form-item>
              <a-form-item label="用户账号" name="userName" required>
                <a-input v-model:value="userProfile.userName" disabled></a-input>
              </a-form-item>
              <a-form-item label="用户昵称" name="nickName" required>
                <a-input v-model:value="userProfile.nickName"></a-input>
              </a-form-item>
              <a-form-item label="用户手机" required>
                <a-input v-model:value="userProfile.phonenumber"></a-input>
              </a-form-item>
              <a-form-item label="用户邮箱" required name="email">
                <a-input v-model:value="userProfile.email"></a-input>
              </a-form-item>
              <a-form-item label="用户性别" required name="sex">
                <a-radio-group
                  v-model:value="userProfile.sex"
                  :options="sexOptions"
                ></a-radio-group>
              </a-form-item>
              <a-row>
                <a-col :span="8" :offset="4">
                  <a-button htmlType="submit" type="primary">保存</a-button>
                </a-col>
              </a-row>
            </a-card>
          </a-form>
        </a-tab-pane>
        <a-tab-pane key="auth" tab="重置密码">
          <a-row>
            <a-col :span="8" :offset="8">
              <a-form size="middle" :model="passwordForm" layout="vertical" @finish="resetPassword">
                <div class="text-center">
                  <img :src="authPng" width="64" />
                  <div class="text-24 text-999 text-bold">更新密码</div>
                </div>
                <a-form-item required label="新密码" name="newPassword" class="mt-24">
                  <a-input-password
                    allow-clear
                    placeholder="请输入新密码"
                    v-model:value.trim="passwordForm.newPassword"
                  ></a-input-password>
                </a-form-item>
                <a-form-item required label="旧密码" name="oldPassword">
                  <a-input-password
                    placeholder="请输入旧密码"
                    type="password"
                    allow-clear
                    v-model:value.trim="passwordForm.oldPassword"
                  ></a-input-password>
                </a-form-item>
                <a-button block :loading="loading" html-type="submit" type="primary" class="mt-12">
                  提交
                </a-button>
              </a-form>
            </a-col>
          </a-row>
        </a-tab-pane>
      </a-tabs>
    </div>
  </a-card>
</template>

<script setup lang="ts">
import { updatePassword, updateProfile } from '@/api/modules/system/user/user';
import { sexOptions } from '@/global/options/system';
import useSystemStore from '@/store/system';
import useUserStore from '@/store/user';
import { getAvatar } from '@/store/user/utils';
import { message, Modal } from 'ant-design-vue';
import { getProfile, userProfile } from '../profile/data';
import authPng from './auth.png';

const fileList = ref([]);
const loading = ref(false);
const passwordForm = ref({
  oldPassword: '',
  newPassword: '',
});

const userStore = useUserStore();
const page = useSystemStore();
const baseURL = page.$state.developer.baseURL;
// + `system/user/profile/avatar`
const headers = {
  Authorization: `Bearer ${userStore.$state.token}`,
};

const refresh = () => {
  getProfile();
};
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
  message.success(data.msg);
  Modal.confirm({
    title: '警告',
    content: '是否刷新页面',
    onOk() {
      window.location.reload();
    },
  });
};
</script>

<style lang="scss" scoped>
::v-deep(.ant-card) {
  box-shadow: none !important;
}
</style>
