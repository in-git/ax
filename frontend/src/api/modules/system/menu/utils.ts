import { convertMenuDataToTree } from '@/utils/common/tree';
import { fetchMenuList } from './menu';

export const getParentMenus = async () => {
  const { data } = await fetchMenuList();
  if (data.data) {
    const treeData = [
      {
        menuId: 0,
        menuName: '主页',
        children: convertMenuDataToTree(data.data),
      },
    ];
    return treeData;
  }
};
