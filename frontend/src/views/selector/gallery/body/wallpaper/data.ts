import axios from 'axios';

export interface PicsumPhoto {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

interface GalleryData {
  data: PicsumPhoto[];
  loading: boolean;
}
export const galleryConfig = ref<GalleryData>({
  loading: false,
  data: [],
});

export const getPhotos = async () => {
  galleryConfig.value.loading = true;
  const http = axios.create({
    baseURL: '',
  });

  const { data } = await http.get<PicsumPhoto[]>(`https://picsum.photos/v2/list?page=2&limit=30`);
  galleryConfig.value.data = data;
  galleryConfig.value.loading = false;
  return data;
};

export const currentPhoto = ref('');
