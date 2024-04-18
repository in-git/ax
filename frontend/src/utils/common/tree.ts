import type { SystemMenu } from '@/api/modules/system/menu/types';
import type { Routers } from '@/api/modules/system/user/types';

/* 线性结构转树形结构 */
export const convertToTree = (data: SystemMenu[]): SystemMenu[] => {
  const map = new Map<number, SystemMenu>();
  const result: SystemMenu[] = [];

  data.forEach(menu => {
    map.set(menu.menuId, { ...menu, children: [] });
  });

  data.forEach(menu => {
    if (menu.parentId && map.has(menu.parentId)) {
      map.get(menu.parentId)!.children?.push(map.get(menu.menuId)!);
    } else {
      result.push(map.get(menu.menuId)!);
    }
  });

  return result;
};
export const flattenTree = (tree: Routers[], flattened: Routers[] = []): Routers[] => {
  tree.forEach(node => {
    const newNode = { ...node };
    if (newNode.children) {
      delete newNode.children;
      if (!newNode.redirect) {
        flattened.push(newNode);
      }
      flattenTree(node.children || [], flattened);
    } else {
      flattened.push(newNode);
    }
  });
  return flattened;
};
