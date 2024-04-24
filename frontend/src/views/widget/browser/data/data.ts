export const browserSrc = ref('https://cn.bing.com/');
export const browserHistory = ref<string[]>([]);

/* 历史记录的指针，用于回退 */
export const pointerIndex = ref(0);
export const homePage = ref('https://cn.bing.com/');
export const browserLoading = ref(true);

export const forceUpdate = ref();
