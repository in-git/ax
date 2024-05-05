<template>
  <div class="browser-head">
    <a-tabs
      type="editable-card"
      :activeKey="currentBrowserTab.id"
      @tabClick="onChange"
      @edit="editTab"
      :tabBarStyle="{ whiteSpace: 'nowrap' }"
    >
      <a-tab-pane v-for="v in browserTabs" :key="v.id" forceRender>
        <template #tab>
          <span class="web-title">{{ v.title }}</span>
        </template>
      </a-tab-pane>
    </a-tabs>

    <a-flex :gap="8">
      <div class="system__icon">
        <LeftOutlined />
      </div>
      <div class="system__icon">
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
      <a-tooltip title="外部链接打开">
        <div class="system__icon" @click="open">
          <LinkOutlined />
        </div>
      </a-tooltip>
    </a-flex>
  </div>
</template>

<script setup lang="ts">
import { openLink } from '@/utils/common/utils';
import { RightOutlined } from '@ant-design/icons-vue';
import { useCloned } from '@vueuse/core';
import { nanoid } from 'nanoid';
import { browserLoading, currentBrowserTab, homePage } from '../data/browser';
import { createBrowserTab, enterUrl } from '../data/browser.methods';
import { activeTab, browserTabs, removeById } from '../data/browser.tabs';
import StarVue from './star/Star.vue';

const inputRef = ref<HTMLInputElement>();

const src = ref('');

const enter = async () => {
  enterUrl(src.value);
};
const editTab = (v: any, action: 'add' | 'remove') => {
  if (action === 'add') {
    const newTab = useCloned(homePage.value).cloned.value;
    newTab.id = nanoid();
    createBrowserTab(newTab);
  } else {
    removeById(v);
  }
};
const focus = () => {
  inputRef.value && inputRef.value.select();
};

const onChange = (v: any) => {
  activeTab(v);
};
const update = () => {
  browserLoading.value = true;
  console.clear();
};
const gotoHome = () => {
  browserLoading.value = true;
  const newTab = useCloned(homePage.value).cloned.value;
  enterUrl(newTab.url, newTab.title);
};

const open = () => {
  openLink(currentBrowserTab.value.url);
};

watch(currentBrowserTab, () => (src.value = currentBrowserTab.value.url), {
  immediate: true,
  deep: true,
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
  font-size: 12px;
  &:hover {
    opacity: 1;
  }
}
.web-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-flex;
  max-width: 80px;
}
</style>
