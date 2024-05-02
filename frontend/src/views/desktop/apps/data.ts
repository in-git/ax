import type { Routers } from '@/api/modules/system/user/types';
import { getRouters } from '@/api/modules/system/user/user';
import { getStaticImage } from '@/api/utils/image';
import logo from '@/assets/logo.png';
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

  if (item.meta.icon.startsWith('http')) {
    return item.meta.icon;
  } else if (item.meta.link) {
    return getStaticImage('image-icon/edge.png');
  } else if (item.meta.icon && item.meta.icon.includes('/')) {
    return getStaticImage(item.meta.icon);
  }
  if (item.name) {
    image = getStaticImage(`image-icon/${item.name.toLocaleLowerCase()}.png`);
  }
  if (item.children) {
    return getStaticImage('image-icon/folder.png');
  } else if (!image.includes('undefined')) {
    return image;
  }
  return logo;
};

export const openApp = (item: Routers) => {
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
