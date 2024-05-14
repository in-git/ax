<template>
  <a-card class="system__template card__container" :bordered="false">
    <LoginVue v-if="loginMode === 'login'" />
    <RegisterVue v-else-if="loginMode === 'register'" />
    <QuickLogin v-else />
  </a-card>
</template>

<script setup lang="ts">
import { getCaptcha, loginMode } from './data';
import LoginVue from './login-register/Login.vue';
import QuickLogin from './login-register/QuickLogin.vue';
import RegisterVue from './login-register/Register.vue';

onMounted(() => {
  getCaptcha();
});
onUnmounted(() => {
  loginMode.value = 'quick-login';
});
</script>

<style lang="scss" scoped>
.card__container {
  display: flex;
  height: 100%;
  :deep(.ant-card-body) {
    overflow-y: auto;
    padding: 0;
    overflow-x: hidden;
  }
}
</style>
