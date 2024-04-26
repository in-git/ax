<template>
  <div class="browser-head">
    <a-tabs
      type="editable-card"
      :activeKey="currentBrowserTab.id"
      @tabClick="onChange"
      @edit="editTab"
    >
      <a-tab-pane v-for="v in browserTabs" :key="v.id" forceRender>
        <template #tab>
          <div class="web-title">{{ v.title }}</div>
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
import { getSiteInfo } from '@/api/modules/system/website/website';
import { EllipsisOutlined, InboxOutlined, RightOutlined } from '@ant-design/icons-vue';
import { useCloned } from '@vueuse/core';
import { nanoid } from 'nanoid';
import { browserLoading, currentBrowserTab, forceUpdate, homePage } from '../data/browser';
import { createBrowserTab, gotoUrl } from '../data/browser.methods';
import { activeTab, browserTabs, goAhead, goBack, removeById } from '../data/browser.tabs';
import StarVue from './star/Star.vue';

const addUrlPrefix = (url: string): string => {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return 'https://' + url;
  }
  return url;
};

const inputRef = ref<HTMLInputElement>();

const src = ref('');

const enter = async () => {
  const { data } = await getSiteInfo(src.value);
  if (data.data) {
    gotoUrl({
      title: data.data.title || '无标题',
      id: nanoid(),
      url: addUrlPrefix(src.value),
    });
  }
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
  forceUpdate.value = nanoid();
  console.clear();
};
const gotoHome = () => {
  currentBrowserTab.value = homePage.value;
};
watch(currentBrowserTab, () => (src.value = currentBrowserTab.value.url), {
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
  font-size: 12px;
  &:hover {
    opacity: 1;
  }
}
.web-title {
  max-width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
../data/browser.tabs
