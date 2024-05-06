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
  pointer: 0,
});
export const browserLoading = ref(true);
