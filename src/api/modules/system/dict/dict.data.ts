import type { IQuery } from '@/api/config/types';
import axios from 'axios';

export const dictDataList = (query: IQuery) => {
  return axios.get(`system/dict/data/list`, {
    params: query,
  });
};
