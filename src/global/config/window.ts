import type { SystemWindow } from '@/types/system';
import { nanoid } from 'nanoid';

/*    */
export const windowList = ref<SystemWindow[]>([]);

export const openWindow = (config: SystemWindow) => {
  const isExist = windowList.value.find(e => {
    return e.component === config.component;
  });

  config.hidden = false;
  config.z = windowList.value.length;
  if (!config.id) {
    config.id = nanoid();
  }

  if (!isExist) {
    windowList.value.push(config);
  } else {
    isExist.hidden = !isExist.hidden;
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
};

export const setAttr = (id: string, key: string, value: any) => {
  windowList.value.forEach(e => {
    if (e.id === id) {
      (currentWindow.value as any)[key] = value;
    }
  });
};

export const hiddenWindow = (id: string, flag = true) => {
  console.log(id);

  setAttr(id, 'hidden', flag);
};
