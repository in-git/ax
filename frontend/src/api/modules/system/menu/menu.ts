import type { Response } from '@/api/config/types';
import axios from 'axios';
import type { SystemMenu } from './types';

export const menuList = () => {
  return axios.get<Response<SystemMenu[]>>(`system/menu/list`);
};

export const getMenu = (id: number) => {
  return axios.get<Response<SystemMenu>>(`system/menu/${id}`);
};

export const deleteMenu = (id: string) => {
  return axios.delete<Response>(`system/menu/${id}`);
};

export const updateMenu = (data: SystemMenu) => {
  return axios.put<Response>(`system/menu`, data);
};

export const createMenu = (data: SystemMenu) => {
  return axios.post<Response>(`system/menu`, data);
};
