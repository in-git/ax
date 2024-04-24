<template>
  <div class="browser-head">
    <a-flex :gap="8">
      <div class="system__icon">
        <LeftOutlined />
      </div>
      <div class="system__icon">
        <ReloadOutlined />
      </div>
      <div class="system__icon">
        <HomeOutlined />
      </div>
      <div class="input flex-1">
        <input v-focus v-model="src" type="text" @keydown.enter="enter" class="flex-1" />
      </div>
    </a-flex>
  </div>
</template>

<script setup lang="ts">
import { browserSrc } from '../data/data';

const src = ref('');
const enter = () => {
  browserSrc.value = src.value;
};
</script>

<style lang="scss" scoped>
input {
  outline: none;
  border: none;
  background-color: #7c7c7c33;
  border-radius: 24px;
  padding: 0 12px;
  width: 100%;
  height: 100%;
}
</style>
