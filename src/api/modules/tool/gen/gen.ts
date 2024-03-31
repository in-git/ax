import type { IQuery, Response, TableResponse } from '@/api/config/types';
import axios from 'axios';

export const fetchCodeList = (query: IQuery) => {
  return axios.get<TableResponse<SystemCode>>(`tool/gen/list`, { params: query });
};

export const fetchCodeById = (id: number) => {
  return axios.get<CodeResponse>(`tool/gen/${id}`);
};

export const createCode = (data: any) => {
  return axios.post<Response>(`tool/gen`, data);
};

export const updateCode = (data: any) => {
  return axios.put<Response>(`tool/gen`, data);
};

export const deleteCodeByIds = (ids: number[]) => {
  return axios.delete<Response>(`tool/gen`, { data: ids });
};
// 同步代码
export const synchDb = (db: string) => {
  return axios.get(`tool/gen/synchDb/${db}`);
};

export const fetchGenDbList = (query: IQuery) => {
  return axios.get(`tool/gen/db/list`, {
    params: query,
  });
};
