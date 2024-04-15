/*
	壁纸,头像,应用图标,用户图标
*/

import type { GalleryType } from '@/api/modules/system/gallery/types';

interface GalleryConfig {
  show: boolean;
  category?: '';
  maximum?: number;
  type?: GalleryType | undefined;
}
export const galleryConfig = ref<GalleryConfig>({
  show: false,
  category: '',
  maximum: 1,
  type: undefined,
});
export const setGallery = (config: GalleryConfig) => {
  galleryConfig.value = config;
};
