import { videoWallpaperList } from '@/global/data/resource.list';
import localforage from 'localforage';

export const galleryData = ref<string[]>([]);
export const galleryType = ref<'video' | 'image'>('image');
export const galleryLoading = ref(false);

export const changeGalleryType = async () => {
  const data = await localforage.getItem('images');

  const { wallpaper } = JSON.parse(JSON.stringify(data));
  galleryData.value = [];
  if (galleryType.value === 'image') {
    galleryData.value = wallpaper || [];
  } else {
    galleryData.value = videoWallpaperList || [];
  }
};

export const currentGallery = ref<string>();
