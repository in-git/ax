import { nanoid } from 'nanoid';
import { browserLoading, currentBrowserTab, forceUpdate, homePage } from './browser';
import type { BrowserType } from './browser.type';

/* 历史记录数组 */
export const browserTabs = ref<BrowserType[]>([
  {
    title: '首页',
    id: 'home',
    url: 'https://cn.bing.com/',
  },
]);

/* 历史记录的指针，用于回退 */
export const pointerIndex = ref(0);

export const goBack = () => {
  if (pointerIndex.value > 0) {
    browserLoading.value = true;
    const item = browserTabs.value[pointerIndex.value--];
    if (item) {
      currentBrowserTab.value = item;
      forceUpdate.value = nanoid();
    } else {
      currentBrowserTab.value = homePage.value;
    }
  }
};

export const goAhead = () => {
  if (pointerIndex.value < browserTabs.value.length) {
    browserLoading.value = true;
    const item = browserTabs.value[pointerIndex.value++];
    if (item) {
      currentBrowserTab.value = item;
      forceUpdate.value = nanoid();
    } else {
      currentBrowserTab.value = homePage.value;
    }
  }
};

export const activeTab = (id: string) => {
  browserTabs.value.forEach(e => {
    if (id === e.id) {
      currentBrowserTab.value = e;
    }
  });
};
export const removeById = (id: string) => {
  browserTabs.value = browserTabs.value.filter(e => {
    return e.id !== id;
  });
};
