<template>
  <Transition
    enter-active-class="animate__animated animate__zoomIn"
    leave-active-class="animate__animated animate__zoomOut"
  >
    <div class="system-form-modal" v-if="userMode === 'form'">
      <div class="modal-container">
        <a-form
          :model="userForm"
          label-align="left"
          @finish="submit"
          :label-col="{
            span: 8,
          }"
        >
          <div class="system-head px-12">
            <div>UserInfo</div>
            <div class="system-icon system-close" @click="userMode = 'table'">
              <CloseOutlined />
            </div>
          </div>
          <div class="flex-1 p-8 form">
            <a-row :gutter="12" class="role">
              <a-col :span="12">
                <a-card title="Base info" :body-style="{ height: '510px' }">
                  <a-form-item label="Nickname" name="nickName" required>
                    <a-input
                      v-model:value="userForm.nickName"
                      focused
                      placeholder="Please enter nickname"
                    />
                  </a-form-item>
                  <a-form-item label="Username" name="userName" required>
                    <a-input
                      v-model:value="userForm.userName"
                      focused
                      placeholder="Please enter username"
                    />
                  </a-form-item>
                  <a-form-item label="Password" name="password" required v-if="!userForm.userId">
                    <a-input
                      type="password"
                      v-model:value="userForm.password"
                      focused
                      placeholder="Please enter password"
                    />
                  </a-form-item>
                  <a-form-item label="Phone" name="phonenumber" required :rules="{ len: 11 }">
                    <a-input
                      :maxlength="11"
                      v-model:value="userForm.phonenumber"
                      placeholder="Please enter phone number"
                    />
                  </a-form-item>
                  <a-form-item label="Email" name="email" required>
                    <a-input
                      v-model:value="userForm.email"
                      type="email"
                      placeholder="Please enter email"
                    />
                  </a-form-item>
                  <a-form-item label="Sex" name="sex" required>
                    <a-radio-group v-model:value="userForm.sex" :options="sexOptions" />
                  </a-form-item>
                  <a-form-item label="Status" name="status" required>
                    <a-radio-group v-model:value="userForm.status" :options="statusOptions" />
                  </a-form-item>
                  <a-form-item label="Remark" name="remark">
                    <a-textarea
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
          <FormFooter></FormFooter>
        </a-form>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { createUser, updateUser } from '@/api/modules/system/user/user';
import { sexOptions, statusOptions } from '@/global/options/system';
import { message } from 'ant-design-vue';
import { userForm, userMode } from './data';
import RightVue from './right/Right.vue';

const submit = async () => {
  let result = '';
  if (!userForm.value.userId) {
    const { data } = await createUser(userForm.value);
    result = data.msg;
  } else {
    const { data } = await updateUser(userForm.value);
    result = data.msg;
  }
  message.success(result);
  back();
};

const back = () => {
  userMode.value = 'table';
};
</script>

<style lang="scss" scoped>
.page-head {
  border-bottom: 1px solid #ddd;
  position: sticky;
  top: 0;
  z-index: 100;
  background: white;
}
::v-deep(.ant-card) {
  box-shadow: none;
}
.form {
  overflow-y: auto;
}
</style>
