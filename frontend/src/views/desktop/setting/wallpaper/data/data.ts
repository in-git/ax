import type { IQuery } from '@/api/config/types';
import { getSystemImages } from '@/api/utils/file';
import type { GalleryType } from '@/types/system';

interface GalleryQuery {
  type: GalleryType;
}

export const galleryData = ref<string[]>();

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
    galleryData.value = data.data || [];
    galleryQuery.value.total = data.data?.length;
    galleryLoading.value = false;
  }
};

export const currentGallery = ref<string>();

interface GalleryConfig {
  category?: '';
  maximum?: number;
  type?: GalleryType | undefined;
}
export const galleryConfig = ref<GalleryConfig>({
  category: '',
  maximum: 1,
  type: undefined,
});
