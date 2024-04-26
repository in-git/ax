import { useCloned } from '@vueuse/core';
import { nanoid } from 'nanoid';
import { browserTabs } from './browser.tabs';
import type { BrowserType } from './browser.type';
export const currentBrowserTab = ref<BrowserType>(useCloned(browserTabs.value[0]).cloned.value);

export const homePage = ref({
  title: '新标签页',
  id: nanoid(),
  url: 'https://cn.bing.com/',
});
export const browserLoading = ref(true);
/* 更新KEY，强制刷新 */
export const forceUpdate = ref();
