<template>
  <a-card class="form card__content" :bordered="false">
    <div>
      <a-flex :gap="24">
        <div
          class="mode-item"
          @click="changeMode(item.value)"
          v-for="item in modeList"
          :class="{ 'item-active': item.value === loginMode }"
        >
          {{ item.label }}
        </div>
      </a-flex>
      <a-form
        size="middle"
        :rules="loginRules"
        layout="vertical"
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
  loginMode,
  loginRules,
  modeList,
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
