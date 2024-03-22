import type { Routers } from '@/api/modules/user/types';
import { getRouters } from '@/api/modules/user/user';
import google from '@/assets/system/google.png';
import { flattenTree } from '@/utils/common/format';

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
