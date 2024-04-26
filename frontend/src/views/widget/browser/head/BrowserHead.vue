<template>
  <div class="browser-head">
    <a-tabs>
      <a-tab-pane key="1" tab="标签1"></a-tab-pane>
      <a-tab-pane key="2">
        <template #tab>
          <div class="flex">
            <div>标签3</div>
            <CloseOutlined class="close-icon" />
          </div>
        </template>
      </a-tab-pane>
    </a-tabs>
    <a-flex :gap="8">
      <div class="system__icon" @click="goBack">
        <LeftOutlined />
      </div>
      <div class="system__icon" @click="goAhead">
        <RightOutlined />
      </div>
      <div class="system__icon" @click="update">
        <ReloadOutlined />
      </div>
      <div class="system__icon" @click="gotoHome">
        <HomeOutlined />
      </div>
      <div class="input flex-1 flex">
        <input
          @focus="focus"
          ref="inputRef"
          v-model="src"
          type="text"
          @keydown.enter="enter"
          class="flex-1"
        />
        <StarVue />
      </div>
      <div class="system__icon">
        <InboxOutlined />
      </div>

      <div class="system__icon">
        <EllipsisOutlined />
      </div>
    </a-flex>
  </div>
</template>

<script setup lang="ts">
import { EllipsisOutlined, InboxOutlined, RightOutlined } from '@ant-design/icons-vue';
import { nanoid } from 'nanoid';
import { browserLoading, browserSrc, forceUpdate, homePage } from '../data/browser';
import { goAhead, goBack } from '../data/browser.history';
import { gotoUrl } from '../data/browser.methods';
import StarVue from './star/Star.vue';
const inputRef = ref<HTMLInputElement>();

const src = ref('');

const enter = () => {
  gotoUrl(addUrlPrefix(src.value));
};

const focus = () => {
  inputRef.value && inputRef.value.select();
};
const addUrlPrefix = (url: string): string => {
  // 检查是否已经包含了 http:// 或 https:// 前缀
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    // 如果没有前缀，则添加 https:// 前缀
    return 'https://' + url;
  }
  // 如果已经包含了前缀，则直接返回原始的网址
  return url;
};
const update = () => {
  browserLoading.value = true;
  forceUpdate.value = nanoid();
  console.clear();
};
const gotoHome = () => {
  browserSrc.value = homePage.value;
};
watch(browserSrc, () => (src.value = browserSrc.value), {
  immediate: true,
});
</script>

<style lang="scss" scoped>
.input {
  background-color: #7c7c7c33;
  border-radius: 24px;
  padding: 0 12px;
  align-items: center;
  gap: 8px;
}
input {
  outline: none;
  border: none;
  background-color: transparent;
  border-radius: 24px;
  width: 100%;
  height: 100%;
}
.browser-head {
  margin-bottom: 8px;
}
.close-icon {
  opacity: 0;
  &:hover {
    opacity: 1;
  }
}
</style>
