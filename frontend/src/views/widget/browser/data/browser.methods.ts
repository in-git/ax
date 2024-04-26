import { openWindow, setData, windowIsExist } from '@/global/config/window';
import { nanoid } from 'nanoid';
import Browser from '../Browser.vue';
import { browserLoading, currentBrowserTab, forceUpdate } from './browser';
import { browserTabs, pointerIndex } from './browser.tabs';
import type { BrowserType } from './browser.type';

/* 统一跳转方法，必须调用，否则无法使用前进后退功能 */
export const gotoUrl = (config: BrowserType) => {
  browserLoading.value = true;
  currentBrowserTab.value = config;
};

export const createBrowserTab = (config: BrowserType) => {
  gotoUrl(config);
  browserTabs.value.push(config);
  pointerIndex.value++;
  forceUpdate.value = nanoid();
};

type BrowserParams = {
  icon: string;
  src: string;
  title: string;
  id: string;
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
