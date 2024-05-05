import { initModuleWH } from '@/store/page/utils';
import type { SystemWindow } from '@/types/system';
import { message } from 'ant-design-vue';

/*    */
export const windowList = ref<SystemWindow[]>([]);
/**
 * @author 吴文龙
 * @param config.component是必填项
 * @param config.title是必填项
 * @description 打开/新建一个窗口
 */
export const openWindow = (config: SystemWindow) => {
  if (!config.id) {
    config.id = 'system-default-window';
    message.warn('窗口没有设置ID');
  }

  config.hidden = false;

  const { width, height, x, y } = initModuleWH(config.id);
  config.w = width;
  config.h = height;
  /* 如果之前有记录，则提取坐标 */
  if (x) {
    config.x = x;
  }
  if (y) {
    config.y = y;
  }

  config.z = windowList.value.length;

  const target = windowList.value.find(e => {
    return e.id === config.id;
  });
  console.log(target, windowList);

  if (!target) {
    windowList.value.push(config);
  } else {
    target.hidden = false;
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
