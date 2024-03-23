import type { IQuery, Response } from '@/api/config/types';
import axios from 'axios';
import type { SystemMenu } from './types';

export const menuList = (query: IQuery) => {
  return axios.get<Response<SystemMenu[]>>(`system/menu/list`, {
    params: query,
  });
};

export const getMenu = (id: string) => {
  return axios.get<Response<SystemMenu>>(`system/menu/${id}`);
};
