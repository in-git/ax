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
        :rules="loginRules"
        layout="vertical"
        @finish="enter"
        size="middle"
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

        <a-form-item label="验证码" name="code" :required="requiredCaptcha" v-if="requiredCaptcha">
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
        <Server />
        <div class="system__subtitle">
          <InfoCircleFilled />
          如果使用的是AX体验服务器，请务必在http下使用
        </div>
        <div class="system__subtitle">
          <InfoCircleFilled />
          若依官网账号:admin；密码:admin123
        </div>

        <a-button type="primary" html-type="submit" class="mt-24" :loading="loginLoading" block>
          登录
        </a-button>
      </a-form>
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
  loginMode,
  loginRules,
  requiredCaptcha,
} from '../data';
import LoginHistory from '../history/LoginHistory.vue';
import { modeList } from '../options';
import Server from './Server.vue';
</script>

<style lang="scss" scoped>
@import './style';
</style>
