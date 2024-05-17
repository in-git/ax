import { triggerNotice } from '@/views/desktop/missions/notice/data/data';
import { useCssVar, useEventListener } from '@vueuse/core';
import axios from 'axios';
import localforage from 'localforage';
import { nanoid } from 'nanoid';
import usePageStore from './store/page';
import useSystemStore from './store/system';

interface DynamicComponents {
  component: any;
  path: string;
}
let modules = import.meta.glob('./views/modules/**/index.vue');

export const systemComponents = ref<DynamicComponents[]>([]);

export const loadSystemIcons = async () => {
  const systemStore = useSystemStore();
  const staticHost = systemStore.$state.developer.resourceHost;

  try {
    const result = await localforage.getItem('images');
    if (!result) {
      const response = await fetch(`${staticHost.replace('/images', '')}/data.json`);
      const data = await response.json();
      await localforage.setItem('images', data);
    }
  } catch (error) {
    console.error('Error fetching avatar data:', error);
  }
};

/**
 * @description: 加载系统组件
 */
export const loadSystemComponents = () => {
  for (const path in modules) {
    const result = path.match(/.*\/(.+).vue$/);
    if (result) {
      const component: any = modules[path];
      systemComponents.value.push({
        component: markRaw(defineAsyncComponent(component)),
        path,
      });
    }
  }
};

/**
 * @description: AXIOS配置
 */
export const setAxios = () => {
  const store = useSystemStore();
  axios.defaults.baseURL = store.$state.developer.baseURL;
  axios.defaults.timeout = store.$state.developer.timeout * 1000;
};

/**
 * @description: 禁止鼠标滚动缩放页面
 */
export const setEvent = () => {
  const wheelEvent = (e: WheelEvent) => {
    if (e.ctrlKey) {
    }
  };
  useEventListener('wheel', wheelEvent, {
    passive: false,
  });
};

/**
 * @description: 设置主题变量
 */
export const setCssVar = () => {
  const store = usePageStore();
  const cssVar = useCssVar('--font-size', document.body);
  cssVar.value = `${store.$state.theme.fontSize}px`;
};

/**
 * @description: 屏幕检测
 */
export const screenDetection = () => {
  if (devicePixelRatio > 1) {
    /* 启用了缩放 */
    triggerNotice({
      content: `你的设备/页面启用了缩放`,
      title: '提示',
      type: 'temp',
      id: nanoid(),
      time: new Date().toDateString(),
      color: 'gray',
    });
  }
};
