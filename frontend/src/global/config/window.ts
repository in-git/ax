import usePageStore from '@/store/page';
import type { SystemWindow } from '@/types/system';
import { nanoid } from 'nanoid';

/*    */
export const windowList = ref<SystemWindow[]>([]);

export const openWindow = (config: SystemWindow) => {
  const pageStore = usePageStore();
  if (!config.id) {
    config.id = nanoid();
  }
  const isExist = windowList.value.find(e => {
    return e.id === config.id;
  });

  config.hidden = false;
  config.w = config.w ? config.w : pageStore.$state.window.width;
  config.h = config.h ? config.h : pageStore.$state.window.height;
  config.z = windowList.value.length;

  if (!isExist) {
    windowList.value.push(config);
  } else {
    isExist.hidden = false;
  }
};

const whiteList = ['system_setting'];

export const clearWindow = () => {
  windowList.value = windowList.value.filter(e => {
    return whiteList.includes(e.id || '');
  });
};

export const closeWindow = (id: string) => {
  windowList.value = windowList.value.filter(e => {
    if (e.id !== id) {
      return e;
    }
  });
};
export const currentWindow = ref<SystemWindow>();

export const toTop = (id: string) => {
  windowList.value.filter(e => {
    e.z = 0;
    if (e.id === id) {
      e.z = 100;
    }
  });
};

export const setCurrentWindow = (id: string) => {
  windowList.value.forEach(e => {
    if (e.id === id) {
      currentWindow.value = e;
    }
  });
  toTop(id);
};

export const setAttr = (id: string, key: string, value: any) => {
  windowList.value.forEach(e => {
    if (e.id === id) {
      (currentWindow.value as any)[key] = value;
    }
  });
};
export const getData = (id: string) => {
  let result: any;
  windowList.value.forEach(e => {
    if (e.id === id) {
      result = e.data;
    }
  });
  return result;
};
export const setData = (id: string, data: any) => {
  windowList.value.forEach(e => {
    if (e.id === id) {
      e.data = data;
    }
  });
};
export const hiddenWindow = (id: string, flag = true) => {
  setAttr(id, 'hidden', flag);
};

/* 所有窗口最小化 */
export const minWindow = () => {
  windowList.value.forEach(e => {
    if (!e.hidden) {
      e.hidden = true;
    }
  });
};

export const windowIsExist = (id: string) => {
  return windowList.value.findIndex(e => e.id === id) > -1;
};
