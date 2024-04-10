import { message } from 'ant-design-vue';
import axios, { type AxiosResponse } from 'axios';
import localforage from 'localforage';
import { nanoid } from 'nanoid';
import type { PhotoType } from './types';

const http = axios.create();
http.interceptors.response.use((response: AxiosResponse) => {
  return response;
});
export interface PexelsResponse {
  page: number;
  per_page: number;
  photos: PexelsPhoto[];
  total_results: number;
  next_page: string;
}

export interface PexelsPhoto {
  id: string;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: any;
  liked: boolean;
  alt: string;
}
interface PexelsQuery {
  page: number;
  per_page: number;
}
export const getPexels = async (query: PexelsQuery) => {
  const api: string = (await localforage.getItem('db-api-pexels')) || '';
  if (!api) {
    message.warning('请填写 [pexels] key');
    return undefined;
  }
  const { data } = await http.get<PexelsResponse>(`https://api.pexels.com/v1/curated`, {
    headers: {
      Authorization: api,
    },
    params: {
      page: query.page || 1,
      per_page: query.per_page || 20,
      orientation: 'landscape',
    },
  });
  console.log(data);

  return {
    row: data,
    photos: data.photos.map((e: PexelsPhoto): PhotoType => {
      return {
        src: e.src.landscape,
        id: e.id,
        name: nanoid(),
      };
    }),
  };
};
