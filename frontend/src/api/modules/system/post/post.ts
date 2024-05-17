import type { IQuery, Response, TableResponse } from '@/api/config/types';
import { exportFile } from '@/api/utils/file';
import { message } from 'ant-design-vue';
import axios from 'axios';
import type { SystemPost } from './types';

/**
 * @description: 查询岗位信息列表
 * @param {IQuery} query 系统通用查询对象
 */
export const fetchPostList = (query: IQuery) => {
  return axios.get<TableResponse<SystemPost>>(`system/post/list`, {
    params: query,
  });
};

/**
 * @description: 查询岗位信息详细
 * @param {postId} postId 主键ID
 */
export const fetchPostById = (postId: number) => {
  return axios.get<Response<SystemPost>>(`system/post/${postId}`);
};

/**
 * @description: 新增岗位信息
 * @param {SystemPost} data 主键ID
 */
export const createPost = (data: SystemPost) => {
  return axios.post<Response<SystemPost>>(`system/post`, data);
};

/**
 * @description: 更新{functionName}
 * @param {SystemPost} data 更新数据
 */
export const updatePost = (data: SystemPost) => {
  return axios.put<Response<SystemPost>>(`system/post`, data);
};

/**
 * @description: 删除{functionName}
 * @param {postIds} postIds 传入ID数组,可以删除多个
 */
export const deletePost = (postIds: number[]) => {
  return axios.delete<Response<SystemPost>>(`system/post/${postIds.join(',')}`);
};

type Page = {
  pageSize: number;
  pageNum: number;
};

/**
 * @description: 导出岗位信息
 * @param {Page} page 根据页码导出表格
 */

export const exportPost = async (page: Page) => {
  try {
    await exportFile({
      url: 'system/post/export',
      data: page,
      fileName: '岗位信息.xls',
      method: 'POST',
    });
    message.success(`成功下载`);
  } catch (e) {
    message.success(`下载失败`);
  }
};
