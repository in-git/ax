import type { Response } from '@/api/config/types';
import axios from 'axios';

export const getCacheNames = () => {
  return axios.get<Response<SystemCache[]>>(`monitor/cache/getNames`);
};

export const getKey = (key: string) => {
  return axios.get<Response<string[]>>(`monitor/cache/getKeys/${key}`);
};

export const getValue = (key: string) => {
  return axios.get<Response<SystemCache>>(`monitor/cache/getValue/sys_config/${key}`);
};
export const clearCacheAll = () => {
  return axios.get(`monitor/cache/clearCacheAll`);
};
