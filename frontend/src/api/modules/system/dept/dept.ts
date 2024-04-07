import type { IQuery, Response } from '@/api/config/types';
import axios from 'axios';

export const fetchDeptList = (query: IQuery) => {
  return axios.get<Response<SystemDept[]>>(`system/dept/list`, {
    params: query,
  });
};

export const updateDept = (data: SystemDept) => {
  return axios.put(`system/dept`, data);
};

export const createDept = (data: SystemDept) => {
  return axios.post(`system/dept`, data);
};
