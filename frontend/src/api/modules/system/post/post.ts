import type { IQuery, Response, TableResponse } from '@/api/config/types';
import axios from 'axios';
import type { SystemPost } from './types';

// 查询岗位信息列表
export const fetchPostList = (query: IQuery) => {
  return axios.get<TableResponse<SystemPost>>(`system/post/list`, {
    params: query,
  });
};
// 查询岗位信息详细
export const fetchPostById = (postId: number) => {
  return axios.get<Response<SystemPost>>(`system/post/${postId}`);
};

// 新增岗位信息
export const createPost = (data: SystemPost) => {
  return axios.post<Response<SystemPost>>(`system/post`, data);
};

// 修改岗位信息
export const updatePost = (data: SystemPost) => {
  return axios.put<Response<SystemPost>>(`/system/post`, data);
};

// 删除岗位信息
export const deletePost = (postIds: number[]) => {
  return axios.delete<Response<SystemPost>>(`system/post/${postIds.join(',')}`);
};
