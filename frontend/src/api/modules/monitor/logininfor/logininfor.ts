import type { IQuery, TableResponse } from '@/api/config/types';
import axios from 'axios';

export const loginLogList = (query: IQuery) => {
  return axios.get<TableResponse<LoginLog>>(`monitor/logininfor/list`, {
    params: query,
  });
};
