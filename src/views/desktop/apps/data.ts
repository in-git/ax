import type { Routers } from '@/api/modules/system/user/types';
import { getRouters } from '@/api/modules/system/user/user';
import folderPng from '@/assets/system/folder.png';
import google from '@/assets/system/google.png';
import { openWindow, setCurrentWindow } from '@/global/config/window';
import { systemComponents } from '@/initialization';
import { openLink } from '@/utils/common/utils';
import FolderVue from '../../page/folder/Folder.vue';
export const getUserRouters = async () => {
  const { data } = await getRouters();
  let newArr: Routers[] = [];
  // if (data.data) {
  //   flattenTree(data.data, newArr);
  // }
  console.log(data.data);

  return data.data || [];
};

export const getIconByName = (item: Routers) => {
  const image = new URL(
    `../../../assets/system/${item.name.toLocaleLowerCase()}.png`,
    import.meta.url,
  ).href;

  if (!image.includes('undefined')) {
    return image;
  } else if (item.meta.link) {
    return google;
  } else if (item.children) {
    return folderPng;
  }
  return undefined;
};

export const openApp = (item: Routers) => {
  if (item.children && item.children.length > 0) {
    openWindow({
      component: markRaw(FolderVue),
      title: `文件夹|${item.meta.title}`,
      data: item.children,
      id: item.name,
    });
    return;
  }
  if (item.meta.link) {
    openLink(item.meta.link);
    return;
  }
  systemComponents.value.forEach(e => {
    if (e.path.includes(item.path)) {
      openWindow({
        title: item.meta.title,
        component: e.component,
        id: item.name,
      });
    }
  });
  setCurrentWindow(item.name);
};
