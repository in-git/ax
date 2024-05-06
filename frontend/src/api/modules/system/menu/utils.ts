import { convertToTree } from '@/utils/common/tree';
import { menuList } from './menu';

export const getParentMenus = async () => {
  const { data } = await menuList();
  if (data.data) {
    const treeData = [
      {
        menuId: 0,
        menuName: '主页',
        children: convertToTree(data.data),
      },
    ];
    return treeData;
  }
};
