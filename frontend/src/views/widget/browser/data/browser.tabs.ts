import { currentBrowserTab } from './browser';
import type { BrowserTabItem } from './browser.type';

/* 历史记录数组 */
export const browserTabs = ref<BrowserTabItem[]>([
  {
    title: '首页',
    id: 'home',
    url: 'https://cn.bing.com/',
    history: [],
    pointer: 0,
  },
]);

export const activeTab = (id: string) => {
  browserTabs.value.forEach(e => {
    if (id === e.id) {
      currentBrowserTab.value = e;
      setBrowserTitle(id, e.title);
    }
  });
};
export const removeById = (id: string) => {
  browserTabs.value = browserTabs.value.filter(e => {
    return e.id !== id;
  });
};

export const setBrowserTitle = (id: string, title: string) => {
  setBrowserAttr(id, 'title', title);
};

export const setBrowserAttr = (id: string, key: string, value: any) => {
  browserTabs.value.forEach(e => {
    if (id === e.id) {
      (currentBrowserTab.value as any)[key] = value;
    }
  });
};
