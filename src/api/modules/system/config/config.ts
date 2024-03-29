import type { IQuery, Response, TableResponse } from '@/api/config/types';
import axios from 'axios';
import type { SystemConfig } from './types';

export const listConfig = (query: IQuery) => {
  return axios.get<TableResponse<SystemConfig>>(`system/config/list`, {
    params: query,
  });
};

export const selectConfig = (id: number) => {
  return axios.get<Response<SystemConfig>>(`system/config/${id}`);
};

export const updateConfig = (data: SystemConfig) => {
  return axios.put<Response<SystemConfig>>(`system/config`, data);
};

export const createConfig = (data: SystemConfig) => {
  return axios.post<Response<SystemConfig>>(`system/config`, data);
};
export const deleteConfig = (ids: number[]) => {
  return axios.post<Response<SystemConfig>>(`system/config/${ids.join(',')}`);
};
