import type { IQuery } from '@/api/config/types';
import { getSystemImages } from '@/api/utils/file';
import { getSysImage } from '@/api/utils/image';
import type { IconType } from '@/types/system';
import videoUrl from './video.url';

interface GalleryQuery {
  type: IconType;
}
export const galleryData = ref<string[]>();
export const galleryType = ref<'video' | 'image'>('image');
export const galleryLoading = ref(false);

export const galleryQuery = ref<IQuery<GalleryQuery>>({
  pageNum: 1,
  pageSize: 20,
  total: 0,
  type: 'wallpaper',
});

export const getGallery = async () => {
  galleryLoading.value = true;
  const { data } = await getSystemImages('wallpaper');
  if (data.data) {
    galleryData.value =
      data.data.map(e => {
        e = getSysImage('wallpaper/' + e);
        return e;
      }) || [];
    galleryQuery.value.total = data.data?.length;
    galleryLoading.value = false;
  }
};

export const changeGalleryType = () => {
  if (galleryType.value === 'image') {
    getGallery();
  } else {
    galleryData.value = videoUrl;
  }
};

export const currentGallery = ref<string>();

interface GalleryConfig {
  category?: '';
  maximum?: number;
  type?: IconType | undefined;
}
export const galleryConfig = ref<GalleryConfig>({
  category: '',
  maximum: 1,
  type: undefined,
});
