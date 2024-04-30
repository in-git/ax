import { videoWallpaperList, wallpaperList } from '@/global/data/resource.list';

export const galleryData = ref<string[]>([]);
export const galleryType = ref<'video' | 'image'>('image');
export const galleryLoading = ref(false);

export const changeGalleryType = () => {
  galleryData.value = [];
  if (galleryType.value === 'image') {
    galleryData.value = wallpaperList;
  } else {
    galleryData.value = videoWallpaperList;
  }
};

export const currentGallery = ref<string>();
