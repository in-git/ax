import type { IQuery, TableResponse } from '@/api/config/types';
import axios from 'axios';

export const fetchFeedbackList = (query: IQuery) => {
  return axios.get<TableResponse<SystemFeedback>>(`/system/feedback/list`, {
    params: query,
  });
};
export const createFeedback = (data: SystemFeedback) => {
  return axios.post(`/system/feedback`, data);
};
