<template>
  <div class="browser-head">
    <a-flex :gap="8">
      <div class="system__icon">
        <LeftOutlined />
      </div>
      <div class="system__icon" @click="update">
        <ReloadOutlined />
      </div>
      <div class="system__icon" @click="gotoHome">
        <HomeOutlined />
      </div>
      <div class="input flex-1">
        <input
          @focus="focus"
          ref="inputRef"
          v-model="src"
          type="text"
          @keydown.enter="enter"
          class="flex-1"
        />
      </div>
      <div class="system__icon">
        <StarOutlined />
      </div>
      <div class="system__icon">
        <EllipsisOutlined />
      </div>
    </a-flex>
  </div>
</template>

<script setup lang="ts">
import { EllipsisOutlined, StarOutlined } from '@ant-design/icons-vue';
import { nanoid } from 'nanoid';
import { gotoUrl } from '../data/browser.function';
import { browserLoading, browserSrc, forceUpdate, homePage } from '../data/data';

const inputRef = ref<HTMLInputElement>();

const src = ref('');

const enter = () => {
  gotoUrl(src.value);
};

const focus = () => {
  inputRef.value && inputRef.value.select();
};

const update = () => {
  browserLoading.value = true;
  forceUpdate.value = nanoid();
};
const gotoHome = () => {
  browserSrc.value = homePage.value;
};
watch(browserSrc, () => (src.value = browserSrc.value), {
  immediate: true,
});
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
