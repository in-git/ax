import type { IQuery, Response } from '@/api/config/types';
import axios from 'axios';

export const fetchDeptList = (query: IQuery) => {
  return axios.get<Response<SystemDept[]>>(`system/dept/list`, {
    params: query,
  });
};
