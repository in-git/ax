import type { IQuery, Response, TableResponse } from '@/api/config/types';
import axios from 'axios';
import type { Operlog } from './types';

export const listOperLog = (query: IQuery) => {
  return axios.get<TableResponse<Operlog>>(`monitor/operlog/list`, {
    params: query,
  });
};
export const clearLogs = () => {
  return axios.delete<Response>(`monitor/operlog/clean`);
};
