import { useCssVar } from '@vueuse/core';
import axios from 'axios';
import usePageStore from './store/page';

const images = import.meta.glob('./assets/system/*.*');
let modules = import.meta.glob('./views/modules/**/index.vue');

interface DynamicComponents {
  component: any;
  path: string;
}
export const systemImages = ref<string[]>([]);

export const systemComponents = ref<DynamicComponents[]>([]);

export const loadSystemIcons = () => {
  Object.keys(images).forEach(path => {
    systemImages.value.push(path);
  });
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

/* 加载谷歌字体 */
export const loadGoogleFont = () => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href =
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
  document.head.appendChild(link);
};

/* 设置请求 */
export const setAxios = () => {
  const store = usePageStore();
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
  const fontSize = useCssVar('--font-size', document.body);
  const radius = useCssVar('--radius', document.body);
  fontSize.value = `${store.$state.theme.fontSize}px`;
  radius.value = `${store.$state.theme.borderRadius}px`;
};
