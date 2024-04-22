import type { Routers } from '@/api/modules/system/user/types';
import { getRouters } from '@/api/modules/system/user/user';
import { getSysImage } from '@/api/utils/image';
import logo from '@/assets/logo.png';
import edge from '@/assets/system/edge.png';
import folderPng from '@/assets/system/folder.png';
import { openWindow, setCurrentWindow } from '@/global/config/window';
import { systemComponents } from '@/initialization';
import { openLink } from '@/utils/common/utils';
import FolderVue from '@/views/selector/folder/Folder.vue';

export const appLoading = ref(false);

export const userRouters = ref<Routers[]>([]);
export const getUserRouters = async () => {
  appLoading.value = true;
  const { data } = await getRouters();

  if (data.data) {
    userRouters.value = data.data;
  }
  appLoading.value = false;
  return data.data || [];
};

/* 兼容若依的图标和自定义图标 */
export const getIconByName = (item: Routers) => {
  let image = '';

  if (item.meta.icon.includes('image-icon')) {
    return getSysImage(item.meta.icon);
  }
  if (item.name) {
    image = new URL(`../../../assets/system/${item.name.toLocaleLowerCase()}.png`, import.meta.url)
      .href;
  }
  if (item.children) {
    return folderPng;
  } else if (!image.includes('undefined')) {
    return image;
  } else if (item.meta.link) {
    return edge;
  }
  return logo;
};

export const openApp = (item: Routers) => {
  console.log(item);

  if (item.children && item.children.length > 0) {
    openWindow({
      component: markRaw(FolderVue),
      title: `${item.meta.title || 'Untitled'}`,
      data: item.children,
      id: item.name,
      icon: getIconByName(item),
    });
  } else if (item.meta.link) {
    openLink(item.meta.link);
  } else {
    if (item.path === '/') {
      return;
    }
    systemComponents.value.forEach(e => {
      if (e.path.includes(item.component)) {
        openWindow({
          title: item.meta.title,
          component: e.component,
          id: item.name,
          icon: getIconByName(item),
        });
      }
    });
  }
  setCurrentWindow(item.name);
};
