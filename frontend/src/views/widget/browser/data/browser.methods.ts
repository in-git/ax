import { openWindow, setData, windowIsExist } from '@/global/config/window';
import Browser from '../Browser.vue';
import { browserLoading, browserSrc } from './browser';
import { browserHistory, pointerIndex } from './browser.history';

/* 统一跳转方法，必须调用，否则无法使用前进后退功能 */
export const gotoUrl = (src: string) => {
  browserLoading.value = true;
  browserSrc.value = src;
  browserHistory.value.push(src);
  pointerIndex.value++;
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
    });
  } else {
    openWindow({
      title: config.title,
      component: markRaw(Browser),
      id: 'browser',
      icon: config.icon,
      data: {
        src: config.src,
      },
    });
  }
};
