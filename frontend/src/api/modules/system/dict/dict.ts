import type { IQuery, Response, TableResponse } from '@/api/config/types';
import { exportFile } from '@/api/utils/file';
import { message } from 'ant-design-vue';
import axios from 'axios';

// 查询字典类型列表
export const fetchTypeList = (query: IQuery) => {
  return axios.get<TableResponse<SystemDict>>(`system/dict/type/list`, {
    params: query,
  });
};
// 查询字典类型详细
export const fetchTypeById = (dictId: number) => {
  return axios.get<Response<SystemDict>>(`system/dict/type/${dictId}`);
};

// 新增字典类型
export const createType = (data: SystemDict) => {
  return axios.post<Response<SystemDict>>(`system/dict/type`, data);
};

// 修改字典类型
export const updateType = (data: SystemDict) => {
  return axios.put<Response<SystemDict>>(`system/dict/type`, data);
};

// 删除字典类型
export const deleteType = (dictIds: number[]) => {
  return axios.delete<Response<SystemDict>>(`system/dict/type/${dictIds.join(',')}`);
};
export const optionSelect = () => {
  return axios.get(`system/dict/type/optionselect`);
};

/**
 * @description: 根据字典名查询
 * @param {string} name
 */
export const getOptionsByName = (name: string) => {
  return axios.get<Response<SystemDictData[]>>(`system/dict/data/type/${name}`);
};
type Page = {
  pageSize: number;
  pageNum: number;
};

// 导出字典类型
export const exportType = async (page: Page) => {
  await exportFile({
    url: 'system/dict/type/export',
    data: page,
    fileName: '字典类型.xls',
    method: 'POST',
  });
  message.success(`成功下载`);
};
