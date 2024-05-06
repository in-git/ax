<template>
  <div class="login flex-1">
    <a-flex class="login-container">
      <Welcome />
      <LoginVue v-if="loginMode === 'login'"></LoginVue>
      <RegisterVue v-else></RegisterVue>
    </a-flex>
  </div>
</template>

<script setup lang="ts">
import Welcome from './Welcome.vue';
import { loginMode } from './data';
import LoginVue from './login-register/Login.vue';
import RegisterVue from './login-register/Register.vue';
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  height: 100%;
}
</style>
