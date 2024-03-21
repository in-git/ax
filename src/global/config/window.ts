import { nanoid } from 'nanoid';

interface Window {
  title: string;
  w?: number;
  h?: number;
  z?: number;
  component: any;
  id?: string;
  show?: boolean;
  /* Extra data */
  data?: any;
}

/*    */
export const windowList = ref<Window[]>([]);

export const openWindow = (config: Window) => {
  const isExist = windowList.value.find(e => {
    return e.component === config.component;
  });
  config.show = true;
  config.z = windowList.value.length;
  if (!config.id) {
    config.id = nanoid();
  }

  if (!isExist) {
    windowList.value.push(config);
  } else {
    isExist.show = !isExist.show;
  }
};

const whiteList = ['system_setting'];

export const clearWindow = () => {
  windowList.value = windowList.value.filter(e => {
    return whiteList.includes(e.id || '');
  });
};

export const closeWindow = (id: string) => {
  console.log('===');

  windowList.value = windowList.value.filter(e => {
    if (e.id !== id) {
      return e;
    }
  });
};
