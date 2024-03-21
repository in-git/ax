<template>
  <div class="login flex-1">
    <div class="login-container">
      <Welcome />
      <div class="form">
        <div class="form-container p-24">
          <a-space direction="vertical">
            <h1 class="mb-24">Login in</h1>
            <a-form layout="vertical" size="large" @finish="finish" :model="loginForm">
              <a-form-item label="Username" required name="name">
                <a-input
                  v-model:value="loginForm.name"
                  allow-clear
                  placeholder="Please enter username"
                ></a-input>
              </a-form-item>
              <a-form-item label="Password" required name="password">
                <a-input-password
                  allow-clear
                  v-model:value="loginForm.password"
                  placeholder="Please enter password"
                ></a-input-password>
              </a-form-item>
              <a-form-item name="lang">
                <a-radio-group
                  v-model:value="loginForm.lang"
                  :options="langOptions"
                ></a-radio-group>
              </a-form-item>
              <a-button type="primary" html-type="submit" block>Login</a-button>
            </a-form>
            <a-card class="mt-24">
              <a-descriptions title="Tips" :column="1">
                <a-descriptions-item label="UserName">Demo</a-descriptions-item>
                <a-descriptions-item label="Password">1panel</a-descriptions-item>
              </a-descriptions>
            </a-card>
          </a-space>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { captcha, issafety, login } from '@/api/modules/user/user';
import Welcome from './Welcome.vue';
import { langOptions, loginForm, loginLoading } from './data';

const getCaptcha = async () => {
  const { data } = await captcha();
  if (data.data) {
    loginForm.value.captchaId = data.data.captchaID;
  }
};
const verify = async () => {
  const { data } = await issafety('0703ecf7d3');
};
onMounted(() => {
  getCaptcha();
  verify();
});

const finish = async () => {
  loginLoading.value = true;
  try {
    const { data } = await login({
      name: loginForm.value.name,
      password: loginForm.value.password,
      ignoreCaptcha: true,
      captcha: '',
      captchaID: '',
      authMethod: 'session',
      language: loginForm.value.lang,
    });

    console.log(data);

    loginLoading.value = false;
  } catch (error) {
    loginLoading.value = false;
  }
};
</script>

<style lang="scss" scoped>
.login {
  background: #f8f8f8;
  .login-container {
    display: flex;
    height: 100%;

    .form {
      padding: 12px;
      min-width: 400px;
      width: 30%;
      .form-container {
        background: white;
        border: 1px solid #ddd;
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
