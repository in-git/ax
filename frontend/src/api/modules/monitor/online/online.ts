import type { IQuery } from '@/api/config/types';
import axios from 'axios';

export const fetchOnlineList = (query: IQuery) => {
  return axios.get(`monitor/online/list`, {
    params: query,
  });
};
/* 强退用户 */
export const forceLogout = (id: string) => {
  return axios.delete(`monitor/online/${id}`);
};
