import type { IQuery, Response, TableResponse } from '@/api/config/types';
import axios from 'axios';

export const dictDataList = (query: IQuery) => {
  return axios.get<TableResponse<SystemDictData>>(`system/dict/data/list`, {
    params: query,
  });
};

export const selectDictData = (id: number) => {
  return axios.get<Response<SystemDictData>>(`system/dict/data/${id}`);
};

export const deleteDictData = (ids: number[]) => {
  return axios.delete<Response>(`system/dict/data/${ids.join(',')}`);
};

export const updateDictData = (data: SystemDictData) => {
  return axios.put<Response>(`system/dict/data`, data);
};

export const createDictData = (data: SystemDictData) => {
  return axios.post<Response>(`system/dict/data`, data);
};

export const getOptionsByName = (name: string) => {
  return axios.get<Response<SystemDictData[]>>(`system/dict/data/type/${name}`);
};
