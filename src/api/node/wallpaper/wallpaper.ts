import { node } from '@/api/config/node';
import type { IQuery } from '@/api/config/types';

export const fetchWallpaper = (query: Partial<IQuery<{ cid: string | number }>>) => {
  return node.get(`public/wallpaper`, {
    params: query,
  });
};
export const getWallpaperTags = () => {
  return node.get(`public/wallpaperTags`);
};
