import { useCssVar } from '@vueuse/core';
import axios from 'axios';
import localforage from 'localforage';
import usePageStore from './store/page';
import useSystemStore from './store/system';

let modules = import.meta.glob('./views/modules/**/index.vue');

interface DynamicComponents {
  component: any;
  path: string;
}

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

/* 加载系统组件 */
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

/* 设置请求 */
export const setAxios = () => {
  const store = useSystemStore();
  /*  */
  axios.defaults.baseURL = store.$state.developer.baseURL;
  axios.defaults.timeout = store.$state.developer.timeout * 1000;
};

/* 设置事件 */
export const setEvent = () => {
  /* 禁止鼠标滚动缩放页面 */
  const wheelEvent = (e: WheelEvent) => {
    if (e.ctrlKey) {
      e.preventDefault();
    }
  };
  document.addEventListener('wheel', wheelEvent, { passive: false });
};
/* 设置主题变量 */
export const setCssVar = () => {
  const store = usePageStore();
  const cssVar = useCssVar('--font-size', document.body);
  cssVar.value = `${store.$state.theme.fontSize}px`;
};
