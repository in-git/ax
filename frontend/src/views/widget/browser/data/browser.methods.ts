import { openWindow, setData, windowIsExist } from '@/global/window/window';
import Browser from '../Browser.vue';
import { browserLoading, currentBrowserTab } from './browser';
import { browserTabs, setBrowserTitle } from './browser.tabs';
import type { BrowserTabItem } from './browser.type';

/* 统一跳转方法，必须调用，否则无法使用前进后退功能 */
export const gotoUrl = (config: BrowserTabItem) => {
  currentBrowserTab.value = config;
};

export const createBrowserTab = (config: BrowserTabItem) => {
  gotoUrl(config);
  browserTabs.value.push(config);
};

type BrowserParams = {
  icon: string;
  src: string;
  title: string;
  id: string;
};
const addUrlPrefix = (url: string): string => {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return 'https://' + url;
  }
  return url;
};

/* 打开内部浏览器的方法 */
export const openInternet = (config: BrowserParams) => {
  if (windowIsExist('browser')) {
    setData('browser', {
      src: config.src,
      title: config.title,
    });
  } else {
    openWindow({
      title: config.title,
      component: markRaw(Browser),
      id: 'browser',
      icon: config.icon,
      data: {
        src: config.src,
        title: config.title,
      },
    });
  }
};

/* 在当前标签输入一个URL */
export const enterUrl = (src: string, title?: string) => {
  currentBrowserTab.value.url = addUrlPrefix(src);
  browserLoading.value = true;
  setBrowserTitle(currentBrowserTab.value.id, title || src);
};
