import type { IQuery, Response, TableResponse } from '@/api/config/types';
import axios from 'axios';
import type { SystemWebsite } from './types';

// 查询网页收藏列表
export const fetchWebsiteList = (query: IQuery) => {
  return axios.get<TableResponse<SystemWebsite>>(`system/website/list`, {
    params: query,
  });
};
// 查询网页收藏详细
export const fetchWebsiteById = (websiteId: number) => {
  return axios.get<Response<SystemWebsite>>(`system/website/${websiteId}`);
};

// 新增网页收藏
export const createWebsite = (data: SystemWebsite) => {
  return axios.post<Response<SystemWebsite>>(`system/website`, data);
};

// 修改网页收藏
export const updateWebsite = (data: SystemWebsite) => {
  return axios.put<Response<SystemWebsite>>(`/system/website`, data);
};

// 删除网页收藏
export const deleteWebsite = (websiteIds: number[]) => {
  return axios.delete<Response<SystemWebsite>>(`system/website/${websiteIds.join(',')}`);
};
