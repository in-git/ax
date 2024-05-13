<template>
  <a-card class="system__template card__container" :bordered="false">
    <LoginVue v-if="loginMode === 'login'"></LoginVue>
    <RegisterVue v-else></RegisterVue>
  </a-card>
</template>

<script setup lang="ts">
import { loginMode } from './data';
import LoginVue from './login-register/Login.vue';
import RegisterVue from './login-register/Register.vue';
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
