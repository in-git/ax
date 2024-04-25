import { browserLoading, browserSrc } from './browser';
import { browserHistory, pointerIndex } from './browser.history';

export const gotoUrl = (src: string) => {
  browserLoading.value = true;
  browserSrc.value = src;
  browserHistory.value.push(src);
  pointerIndex.value++;
  console.clear();
};
