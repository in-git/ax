import type { Response } from '@/api/config/types';
import axios from 'axios';

export const getCacheNames = () => {
  return axios.get<Response<SystemCache[]>>(`monitor/cache/getNames`);
};
