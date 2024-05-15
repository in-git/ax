import logoPng from '@/assets/logo.png';
import { initModuleWH } from '@/store/page/utils';
import type { SystemWindow } from '@/types/system';
import { message } from 'ant-design-vue';
import { nanoid } from 'nanoid';
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
    config.id = getTempId();
    message.warn('窗口没有设置ID');
  }
  if (!config.icon) {
    config.icon = logoPng;
  }
  const { width, height, x, y } = initModuleWH(config.id);
  if (!config.x && x) {
    /* 如果之前有记录，则提取坐标 */
    config.x = x;
  }
  if (!config.y && y) {
    config.y = y;
  }
  if (!config.w) {
    config.w = width;
  }
  if (!config.h) {
    config.h = height;
  }
  config.hidden = false;

  config.z = windowList.value.length;

  const target = windowList.value.find(e => {
    return e.id === config.id;
  });

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

/**
 * @description:
 * 获取临时ID,方便清除
 * 这类窗口将不会记录它的大小，位置
 * @return {string}
 */
export const getTempId = (): string => {
  return `TEMP_ID:${nanoid()}`;
};
