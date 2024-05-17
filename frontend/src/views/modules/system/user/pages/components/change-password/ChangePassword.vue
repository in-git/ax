<template>
  <div>
    <a-modal
      v-model:open="passwordModal"
      get-container=".SystemUser"
      :footer="false"
      title="修改密码"
    >
      <a-card :bordered="false">
        <a-form :model="form" layout="vertical" @submit="submit">
          <a-form-item required name="password" label="新的密码" :rules="rules">
            <a-input-password
              :maxlength="16"
              allowClear
              v-model:value="form.password"
              placeholder="请输入新的密码"
            ></a-input-password>
          </a-form-item>
          <a-button type="primary" block htmlType="submit">确定</a-button>
        </a-form>
      </a-card>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { resetPwd } from '@/api/modules/system/user/user';
import { message } from 'ant-design-vue';
import type { RuleObject } from 'ant-design-vue/es/form';
import { passwordModal, userForm } from '../../../data/form';

const form = ref({
  password: '',
});

const submit = async () => {
  const { data } = await resetPwd(form.value.password, userForm.value.userId!);
  message.success(data.msg);
  passwordModal.value = false;
  form.value.password = '';
};
const rules: RuleObject = {
  min: 6,
  max: 16,
  type: 'string',
  required: true,
};
</script>

<style lang="scss" scoped>
:deep(.ant-card) {
  box-shadow: none;
}
</style>
../../form/form ../../../data/form
