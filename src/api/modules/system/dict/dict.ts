import type { IQuery } from '@/api/config/types';
import axios from 'axios';

export const dictList = (query: IQuery) => {
  return axios.get(`system/dict/type/list`, {
    params: query,
  });
};
