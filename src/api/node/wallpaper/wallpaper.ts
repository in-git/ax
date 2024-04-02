import http from '@/api/config/node';
import type { IQuery } from '@/api/config/types';

export const fetchWallpaper = (query: Partial<IQuery<{ cid: string | number }>>) => {
  return http.get(`public/wallpaper`, {
    params: query,
  });
};
export const getWallpaperTags = () => {
  return http.get(`public/wallpaperTags`);
};
