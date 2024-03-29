import type { IQuery, TableResponse } from '@/api/config/types';
import axios from 'axios';

export const listDict = (query: IQuery) => {
  return axios.get<TableResponse<SystemDict>>(`system/dict/type/list`, {
    params: query,
  });
};
