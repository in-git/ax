<template>
  <div class="login flex-1">
    <div class="login-container">
      <div class="welcome p-12 flex flex-col">
        <h1 class="text-32">Welcome</h1>
        <div class="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ex deserunt corporis in
          atque qui, laboriosam ipsam quis, ad expedita libero ab, vel rerum quos a inventore rem
          sapiente explicabo.
        </div>
        <div class="media flex-1"></div>
      </div>
      <div class="form">
        <div class="form-container p-24">
          <a-space direction="vertical">
            <h1 class="mb-24">Login in</h1>
            <a-form layout="vertical" size="large">
              <a-form-item label="User name" required>
                <a-input allow-clear placeholder="Please enter username"></a-input>
              </a-form-item>
              <a-form-item label="Password" required>
                <a-input-password
                  allow-clear
                  placeholder="Please enter password"
                ></a-input-password>
              </a-form-item>
              <a-form-item>
                <a-radio-group :options="langOptions"></a-radio-group>
              </a-form-item>
              <a-button type="primary" block>Login</a-button>
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
const langOptions = [
  { label: 'English', value: 'en' },
  { label: 'Chinese', value: 'zh' },
];
</script>

<style lang="scss" scoped>
.login {
  background: #f8f8f8;
  .login-container {
    display: flex;
    height: 100%;
    .welcome {
      flex-basis: 70%;
      background: #f8f8f8;
      border-right: 1px solid #ddd;
      .desc {
        width: 500px;
        margin: 24px 0;
        color: #333;
      }
      .media {
        background: url('./assets/background.webp');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: var(--radius);
        overflow: hidden;
      }
    }
    .form {
      padding: 12px;
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
