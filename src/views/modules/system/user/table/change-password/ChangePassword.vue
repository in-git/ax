<template>
  <div>
    <SystemModal v-model:visible="passwordModal" w="300px" h="200px" title="Change password">
      <a-card :bordered="false">
        <a-form :model="form" layout="vertical" @submit="submit">
          <a-form-item required name="password" label="New password" :rules="rules">
            <a-input :maxlength="16" v-model:value="form.password" type="password"></a-input>
          </a-form-item>
          <a-button type="primary" block htmlType="submit">Confirm</a-button>
        </a-form>
      </a-card>
    </SystemModal>
  </div>
</template>

<script setup lang="ts">
import { resetPwd } from '@/api/modules/system/user/user';
import SystemModal from '@/components/modal/SysModal.vue';
import { message } from 'ant-design-vue';
import type { RuleObject } from 'ant-design-vue/es/form';
import { userForm } from '../../form/data';
import { passwordModal } from './data';
const form = ref({
  password: '',
});
const submit = async () => {
  const { data } = await resetPwd(form.value.password, userForm.value.userId!);
  message.success(data.msg);
};
const rules: RuleObject = {
  min: 6,
  max: 16,
  type: 'string',
  required: true,
};
</script>

<style lang="scss" scoped>
::v-deep(.ant-card) {
  box-shadow: none;
}
</style>
