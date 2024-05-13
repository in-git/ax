<template>
  <a-card class="form card__content" :bordered="false">
    <div class="form-container">
      <a-space direction="vertical" class="w-100">
        <a-flex :gap="24">
          <h4 @click="changeMode('login')">登录</h4>
          <h1 class="text-bold mb-0">注册</h1>
        </a-flex>
        <a-form :rules="loginRules" layout="vertical" @finish="finish" :model="loginForm">
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
              <a-input placeholder="请输入验证码" :maxlength="2" v-model:value="loginForm.code" />
              <div>
                <a-image
                  @click="getCaptcha"
                  :preview="false"
                  loading="lazy"
                  class="cursor-pointer"
                  :src="captchaImage"
                  width="80px"
                />
              </div>
            </div>
          </a-form-item>

          <a-button class="mt-24" type="primary" html-type="submit" :loading="loginLoading" block>
            注册
          </a-button>
        </a-form>
      </a-space>
    </div>
  </a-card>
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
  h4 {
    font-size: 16px;
    line-height: 44px;
    color: #999;
    cursor: pointer;
  }
  h1 {
    line-height: 44px;
    color: var(--primary);
    cursor: pointer;
    border-bottom: 2px solid var(--primary);
  }
}
</style>

<style lang="scss" scoped>
@import './style';
</style>
