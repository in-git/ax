import { useCloned } from '@vueuse/core';
import { nanoid } from 'nanoid';
import { browserTabs } from './browser.tabs';
import type { BrowserTabItem } from './browser.type';
export const currentBrowserTab = ref<BrowserTabItem>(useCloned(browserTabs.value[0]).cloned.value);

export const homePage = ref({
  title: '新标签页',
  id: nanoid(),
  url: 'https://cn.bing.com/',
  history: [],
});
export const updateBrowserFlag = ref();
export const browserLoading = ref(true);
/* 更新KEY，强制刷新 */
export const forceUpdate = () => {
  updateBrowserFlag.value = nanoid();
};
