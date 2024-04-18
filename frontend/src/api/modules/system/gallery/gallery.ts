import type { IQuery, Response, TableResponse } from '@/api/config/types';
import axios from 'axios';
import type { SystemGallery } from './types';

// 查询系统图库列表
export const fetchGalleryList = (query: IQuery) => {
  return axios.get<TableResponse<SystemGallery>>(`system/gallery/list`, {
    params: query,
  });
};
// 查询系统图库详细
export const fetchGalleryById = (galleryId: number) => {
  return axios.get<Response<SystemGallery>>(`system/gallery/${galleryId}`);
};

// 新增系统图库
export const createGallery = (data: SystemGallery) => {
  return axios.post<Response<SystemGallery>>(`system/gallery`, data);
};

// 修改系统图库
export const updateGallery = (data: SystemGallery) => {
  return axios.put<Response<SystemGallery>>(`/system/gallery`, data);
};

// 删除系统图库
export const deleteGallery = (galleryIds: number[]) => {
  return axios.delete<Response<SystemGallery>>(`system/gallery/${galleryIds.join(',')}`);
};

// 获取系统图标
export const getIcons = () => {
  return axios.get<Response<string>>(`system/gallery/getIcons`);
};
