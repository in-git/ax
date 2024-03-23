import type { SystemMenu } from '@/api/modules/system/menu/types';
import type { Routers } from '@/api/modules/system/user/types';

export function bytesToSize(bytes: number): string {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Byte';
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / 1024 ** i).toFixed(2)} ${sizes[i]}`;
}
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

export const convertToTree = (data: SystemMenu[]): SystemMenu[] => {
  const map = new Map<string, SystemMenu>();
  const result: SystemMenu[] = [];

  data.forEach(menu => {
    map.set(menu.menuId, { ...menu, children: [] });
  });

  data.forEach(menu => {
    if (menu.parentId && map.has(menu.parentId)) {
      map.get(menu.parentId)!.children.push(map.get(menu.menuId)!);
    } else {
      result.push(map.get(menu.menuId)!);
    }
  });

  return result;
};
