import type { IQuery, Response, TableResponse } from '@/api/config/types';
import axios from 'axios';

export const listDict = (query: IQuery) => {
  return axios.get<TableResponse<SystemDict>>(`system/dict/type/list`, {
    params: query,
  });
};

export const deleteDict = (ids: number[]) => {
  return axios.delete<Response>(`system/dict/type/${ids.join(',')}`);
};

export const selectDict = (id: number) => {
  return axios.get<Response>(`system/dict/type/${id}`);
};

export const updateDict = (data: SystemDict) => {
  return axios.put<Response>(`system/dict/type`, data);
};

export const createDict = (data: SystemDict) => {
  return axios.post<Response>(`system/dict/type`, data);
};

export const selectDictData = (id: number) => {
  return axios.get<Response>(`system/dict/type/${id}`);
};

export const optionSelect = () => {
  return axios.get<Response<SystemDict[]>>(`system/dict/type/optionselect`);
};
