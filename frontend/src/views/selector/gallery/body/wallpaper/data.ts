import type { IQuery } from '@/api/config/types';
import { getPexels, type PexelsResponse } from '@/api/external/utils/pexels';
import type { PhotoType } from '@/api/external/utils/types';

interface GalleryData {
  data: PhotoType[];
  loading: boolean;
  extraInfo: PexelsResponse | undefined;
}
export const pexelsResult = ref<GalleryData>({
  loading: false,
  data: [],
  extraInfo: undefined,
});

export const pexelsQuery = ref<IQuery>({
  pageNum: 1,
  pageSize: 30,
  total: 0,
});

export const getPexelsPhotos = async () => {
  pexelsResult.value.loading = true;
  const data = await getPexels(pexelsQuery.value.pageNum, pexelsQuery.value.pageSize);
  if (data) {
    pexelsResult.value.data = data.photos;
    pexelsResult.value.extraInfo = data.row;
    pexelsResult.value.loading = false;
  }
};

export const currentPhoto = ref('');
