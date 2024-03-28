import type { IQuery, Response, TableResponse } from '@/api/config/types';
import axios from 'axios';

export const listNotice = (query: IQuery) => {
  return axios.get<TableResponse<SystemNotice>>(`system/notice/list`, {
    params: query,
  });
};
export const getNotice = (id: number) => {
  return axios.get<Response<SystemNotice>>(`system/notice/${id}`);
};
