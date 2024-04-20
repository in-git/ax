<template>
  <a-card class="form card__content" :bordered="false">
    <div class="form-container">
      <a-space direction="vertical" class="w-100">
        <a-flex class="mb-24" :gap="24">
          <h1 class="text-bold mb-0">登录</h1>
          <h4 @click="changeMode('register')">注册</h4>
        </a-flex>
        <a-form
          :rules="loginRules"
          layout="vertical"
          size="large"
          @finish="enter"
          :model="loginForm"
        >
          <LoginHistory />

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
          <a-button type="primary" html-type="submit" class="mt-24" :loading="loginLoading" block>
            登录
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
  enter,
  getCaptcha,
  loginForm,
  loginLoading,
  loginRules,
} from '../data';
import LoginHistory from '../history/LoginHistory.vue';

onMounted(() => {
  getCaptcha();
});
</script>

<style lang="scss" scoped>
@import './style';
</style>
