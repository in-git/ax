import type { IQuery, TableResponse } from '@/api/config/types';
import axios from 'axios';
import type { Role } from './types';

export const roleList = (query: IQuery) => {
  return axios.get<TableResponse<Role>>(`system/role/list`, {
    params: query,
  });
};
