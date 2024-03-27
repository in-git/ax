import type { IQuery, TableResponse } from '@/api/config/types';
import axios from 'axios';
import type { SystemPost } from './types';

export const postList = (query: IQuery) => {
  return axios.get<TableResponse<SystemPost>>(`system/post/list`, {
    params: query,
  });
};
