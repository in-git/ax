import { nanoid } from 'nanoid';
import { browserLoading, browserSrc, forceUpdate, homePage } from './browser';

/* 历史记录数组 */
export const browserHistory = ref<string[]>([]);
/* 历史记录的指针，用于回退 */
export const pointerIndex = ref(0);

export const goBack = () => {
  if (pointerIndex.value > 0) {
    browserLoading.value = true;
    const src = browserHistory.value[pointerIndex.value--];
    if (src) {
      browserSrc.value = src;
      forceUpdate.value = nanoid();
    } else {
      browserSrc.value = homePage.value;
    }
  }
};

export const goAhead = () => {
  if (pointerIndex.value < browserHistory.value.length) {
    browserLoading.value = true;
    const src = browserHistory.value[pointerIndex.value++];
    if (src) {
      browserSrc.value = src;
      forceUpdate.value = nanoid();
    } else {
      browserSrc.value = homePage.value;
    }
  }
};
