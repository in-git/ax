import type { Routers } from '@/api/modules/user/types';
import { getRouters } from '@/api/modules/user/user';
import { flattenTree } from '@/utils/common/format';

export const getUserRouters = async () => {
  const { data } = await getRouters();
  let newArr: Routers[] = [];
  if (data.data) {
    flattenTree(data.data, newArr);
  }
  return newArr;
};
