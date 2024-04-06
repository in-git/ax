import mock from '@/api/config/mock';
import type { Response } from '@/api/config/types';
import type { MockWallpaperImage, MockWallpaperTag } from './types';

export const mockWallpaper = () => {
  return mock.get<Response<MockWallpaperImage[]>>(`/public/wallpaper/images`);
};

export const testMock = () => {
  return mock.get(`/test`);
};
export const mockTags = () => {
  return mock.get<Response<MockWallpaperTag[]>>(`/public/wallpaper/tags`);
};
