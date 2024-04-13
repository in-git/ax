<template>
  <div class="form">
    <div class="form-container p-32">
      <a-space direction="vertical" class="w-100">
        <h1 class="mb-24 text-bold">注册</h1>
        <a-form
          :rules="loginRules"
          layout="vertical"
          size="large"
          @finish="finish"
          :model="loginForm"
        >
          <a-form-item label="账号" required name="username">
            <a-input
              allow-clear
              v-model:value="loginForm.username"
              placeholder="请输入账号"
            ></a-input>
          </a-form-item>
          <a-form-item label="密码" required name="password">
            <a-input-password
              allow-clear
              v-model:value="loginForm.password"
              placeholder="请输入密码"
            ></a-input-password>
          </a-form-item>

          <a-form-item label="验证码" name="code" required>
            <div class="flex gc-12">
              <a-input placeholder="请输入验证码" v-model:value="loginForm.code" />
              <a-image
                @click="getCaptcha"
                :preview="false"
                loading="lazy"
                class="cursor-pointer"
                :src="captchaImage"
                width="100"
              />
            </div>
          </a-form-item>

          <a-button type="primary" html-type="submit" :loading="loginLoading" block>注册</a-button>
        </a-form>
        <a-divider>已有账号？</a-divider>
        <div class="text-center">
          <a-button type="link" @click="changeMode('login')">返回登录</a-button>
        </div>
      </a-space>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  captchaImage,
  changeMode,
  finish,
  getCaptcha,
  loginForm,
  loginLoading,
  loginRules,
} from '../data';

onMounted(() => {
  getCaptcha();
});
</script>

<style lang="scss" scoped>
.form {
  padding: 24px;
  min-width: 400px;
  width: 30%;
  .form-container {
    background: white;
    border: 1px solid #ddd;
    height: 100%;
    width: 100%;
  }
}
</style>
