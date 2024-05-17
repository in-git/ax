import { EventBusEnum } from '@/global/enum/eventBus';
import { LocalforageEnum } from '@/global/enum/localforage';
import { useEventBus } from '@vueuse/core';
import localforage from 'localforage';
import usePageStore from '.';
import type { BackgroundType } from './types';
/* 桌面背景加载 */
const bus = useEventBus(EventBusEnum.UPDATE_BACKGROUND);

/**
 * @description: 统一设置壁纸，方法复用，谨慎修改
 * @param {string} src
 * @param {*} type
 */
export const setBackground = async (src: string, type: BackgroundType) => {
  const store = usePageStore();
  store.$state.desktop.background.type = type;
  console.log(src);

  await localforage.setItem(LocalforageEnum.BACKGROUND_SRC, `${src}`);
  bus.emit();
};

/* 初始化模块宽高 ,在打开窗口和拖拽停止两个地方调用 */
export const initModuleWH = (id: string) => {
  const pageStore = usePageStore();
  const module = pageStore.$state.window[id];
  /* 当模块不存在，初始化 */
  if (!module) {
    const w = Math.floor(window.innerWidth * 0.6);
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
