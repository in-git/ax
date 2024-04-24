import { browserHistory, browserLoading, browserSrc, pointerIndex } from './data';

export const gotoUrl = (src: string) => {
  browserLoading.value = true;
  browserSrc.value = src;
  browserHistory.value.push(src);
  pointerIndex.value++;
};
