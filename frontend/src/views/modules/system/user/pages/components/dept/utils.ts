import type { UserDept } from '@/api/modules/system/user/types';

export const getFullPath = (
  targetId: number,
  node: UserDept[],
  path: number[] = [],
): number[] | null => {
  for (const item of node) {
    if (item.id === targetId) {
      return [...path, item.id];
    }
    if (item.children) {
      const newPath = getFullPath(targetId, item.children, [...path, item.id]);
      if (newPath) {
        return newPath;
      }
    }
  }
  return path;
};

export const findInTree = (name: string, node: UserDept[]): UserDept[] | null => {
  for (const item of node) {
    if (item.label.includes(name)) {
      return [item];
    }

    if (item.children) {
      const result = findInTree(name, item.children);

      if (result) {
        return result;
      }
    }
  }

  return null;
};
