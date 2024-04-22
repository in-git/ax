import type { IQuery } from '@/api/config/types';
import { getSystemImages } from '@/api/utils/file';
import type { IconType } from '@/types/system';

interface GalleryQuery {
  type: IconType;
}

export const galleryData = ref<string[]>();

export const galleryLoading = ref(false);

export const galleryQuery = ref<IQuery<GalleryQuery>>({
  pageNum: 1,
  pageSize: 20,
  total: 0,
  type: 'avatar',
});

export const getGallery = async () => {
  galleryLoading.value = true;
  const { data } = await getSystemImages('avatar');
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
  type?: IconType | undefined;
}
export const galleryConfig = ref<GalleryConfig>({
  category: '',
  maximum: 1,
  type: undefined,
});
