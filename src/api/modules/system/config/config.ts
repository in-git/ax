import type { IQuery } from '@/api/config/types';
import axios from 'axios';

export const listConfig = (query: IQuery) => {
  return axios.get(`system/config/list`, {
    params: query,
  });
};
