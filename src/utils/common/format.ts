import type { Routers } from '@/api/modules/user/types';

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
