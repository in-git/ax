import { videoWallpaperList } from '@/global/data/resource.list';
import { EventBusEnum } from '@/global/enum/eventBus';
import type { BackgroundType } from '@/store/page/types';
import { setBackground } from '@/store/page/utils';
import { toBase64 } from '@/utils/file/file';
import { useEventBus } from '@vueuse/core';
import localforage from 'localforage';

export const galleryData = ref<string[]>([]);
export const galleryType = ref<BackgroundType>('image');
export const galleryLoading = ref(false);
const bus = useEventBus(EventBusEnum.UPDATE_BACKGROUND);
export const changeGalleryType = async () => {
  const data = await localforage.getItem('images');
  // const store = usePageStore();
  // store.$state.desktop.background.type = galleryType.value;
  const { wallpaper } = JSON.parse(JSON.stringify(data));
  galleryData.value = [];
  if (galleryType.value === 'image') {
    galleryData.value = wallpaper || [];
  } else {
    galleryData.value = videoWallpaperList || [];
  }
};

export const currentGallery = ref<string>();

/**
 * @description: 设置用户上传的文件
 * @param {File} file 文件类型
 */
export const setBase64Background = async (file: File) => {
  const base64 = await toBase64(file);
  setBackground(base64, 'base64');
  bus.emit();
};
