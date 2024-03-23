import type { Routers } from '@/api/modules/system/user/types';
import { getRouters } from '@/api/modules/system/user/user';
import google from '@/assets/system/google.png';
import { openWindow } from '@/global/config/window';
import { systemComponents } from '@/initialization';
import { flattenTree } from '@/utils/common/format';
import { openLink } from '@/utils/common/utils';

export const getUserRouters = async () => {
  const { data } = await getRouters();
  let newArr: Routers[] = [];
  if (data.data) {
    flattenTree(data.data, newArr);
  }
  return newArr;
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
  }
  return undefined;
};

export const openApp = (item: Routers) => {
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
};
