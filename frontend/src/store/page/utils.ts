import usePageStore from '.';
/* 桌面背景加载 */
export const backgroundLoading = ref(false);

export const setBackground = (src: string, type: 'image' | 'video') => {
  const store = usePageStore();
  store.$state.desktop.background.src = src;
  store.$state.desktop.background.type = type;
  backgroundLoading.value = true;
  const img = new Image();
  img.src = src;
  img.onload = () => {
    backgroundLoading.value = false;
  };
};

/* 初始化模块宽高 ,在打开窗口和拖拽停止两个地方调用 */
export const initModuleWH = (id: string) => {
  const pageStore = usePageStore();
  const module = pageStore.$state.window[id];
  /* 当模块不存在，初始化 */
  if (!module) {
    const w = Math.floor(window.innerWidth * 0.7);
    const h = Math.floor(window.innerHeight * 0.7);
    pageStore.$state.window[id] = {
      width: w > 1000 ? 1000 : w,
      height: h > 700 ? 700 : h,
      x: undefined,
      y: undefined,
    };
  }
  /* 否则返回已存在的值 */
  return pageStore.$state.window[id];
};
