import type { IQuery } from '@/api/config/types';
import axios from 'axios';

export const fetchGenList = (query: IQuery) => {
  return axios.get(`tool/gen/list`, { params: query });
};
