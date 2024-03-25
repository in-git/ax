<template>
  <div class="user-form flex-1 system-form">
    <a-form
      :model="userForm"
      layout="vertical"
      label-align="left"
      class="flex flex-col flex-1 form"
    >
      <a-page-header
        title="User form"
        sub-title="edit user config"
        class="page-head py-8"
        @back="userMode = 'table'"
      />
      <div class="flex-1 p-8">
        <a-row :gutter="12" class="role">
          <a-col :span="12">
            <a-card title="Base info">
              <a-form-item label="Username" name="userName" required>
                <a-input v-model:value="userForm.userName" placeholder="Please enter username" />
              </a-form-item>
              <a-form-item label="Phone" name="phonenumber" required>
                <a-input
                  v-model:value="userForm.phonenumber"
                  placeholder="Please enter phone number"
                />
              </a-form-item>
              <a-form-item label="Email" name="email" required>
                <a-input v-model:value="userForm.email" placeholder="Please enter email" />
              </a-form-item>
              <a-form-item label="Sex" name="sex" required>
                <a-radio-group v-model:value="userForm.sex" :options="sexOptions" />
              </a-form-item>
              <a-form-item label="Status" name="status" required>
                <a-radio-group v-model:value="userForm.status" :options="statusOptions" />
              </a-form-item>
              <a-form-item label="Remark" name="remark" required>
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
    </a-form>
    <FormFooter></FormFooter>
  </div>
</template>

<script setup lang="ts">
import { sexOptions, statusOptions } from '@/global/options/system';
import { userForm, userMode } from './data';
import RightVue from './right/Right.vue';
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
.ant-form-item {
  margin-bottom: 18px;
}
</style>
