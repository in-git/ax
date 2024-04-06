import type { IQuery, Response, TableResponse } from '@/api/config/types';
import axios from 'axios';
import type { SystemPost } from './types';

export const postList = (query: IQuery) => {
  return axios.get<TableResponse<SystemPost>>(`system/post/list`, {
    params: query,
  });
};

export const deletePost = (ids: number[]) => {
  return axios.delete<Response>(`system/post/${ids.join(',')}`);
};

export const getPost = (id: number) => {
  return axios.get<Response<SystemPost>>(`system/post/${id}`);
};

export const addPost = (data: SystemPost) => {
  return axios.post(`system/post`, data);
};
export const updatePost = (data: SystemPost) => {
  return axios.put(`system/post`, data);
};
