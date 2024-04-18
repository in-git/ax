import type { IQuery } from '@/api/config/types';
import { fetchGalleryList } from '@/api/modules/system/gallery/gallery';
import type { GalleryType, SystemGallery } from '@/api/modules/system/gallery/types';

interface GalleryQuery {
  type: GalleryType;
}

export const galleryData = ref<SystemGallery[]>();

export const galleryLoading = ref(false);

export const galleryQuery = ref<IQuery<GalleryQuery>>({
  pageNum: 1,
  pageSize: 20,
  total: 0,
  type: 'wallpaper',
});

export const getGallery = async () => {
  galleryLoading.value = true;
  const { data } = await fetchGalleryList(galleryQuery.value);
  galleryData.value = data.rows;
  galleryQuery.value.total = data.total;
  galleryLoading.value = false;
};

export const currentGallery = ref<SystemGallery>();

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
