import type { Response } from '@/api/config/types';
import axios from 'axios';

export const getCacheNames = () => {
  return axios.get<Response<SystemCache[]>>(`monitor/cache/getNames`);
};
export const getKey = (key: string) => {
  return axios.get<Response<SystemCache[]>>(`monitor/cache/getKeys/${key}`);
};
