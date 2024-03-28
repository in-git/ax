import type { IQuery, TableResponse } from '@/api/config/types';
import axios from 'axios';
import type { SystemConfig } from './types';

export const listConfig = (query: IQuery) => {
  return axios.get<TableResponse<SystemConfig>>(`system/config/list`, {
    params: query,
  });
};
