<template>
  <a-card class="xterm system__module">
    <div class="input">
      <a-textarea :auto-size="{ minRows: 4 }" v-focus placeholder="请输入终端命令" />
    </div>
  </a-card>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.system__module {
  :deep(.ant-card-body) {
    height: 100%;
    background-color: #131313;
  }
}
.input {
  text-align: center;
  display: flex;
  align-items: center;
  place-content: center;
  background: url('./assets/background.jpg');
  padding: 12px 0;
  border-radius: 18px;
  background-size: cover;
  background-position: center;
  height: 100%;
  textarea {
    width: 400px;
    outline: none;
    border-radius: 18px;
    font-size: 16px;
    padding: 8px;
    border: 2px solid rgba(71, 71, 71, 0.822);
  }
}
</style>
