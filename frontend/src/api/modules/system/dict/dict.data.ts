import type { IQuery, Response, TableResponse } from '@/api/config/types';
import { exportFile } from '@/api/utils/file';
import { message } from 'ant-design-vue';
import axios from 'axios';

// 查询字典数据列表
export const fetchDataList = (query: IQuery) => {
  return axios.get<TableResponse<SystemDictData>>(`system/dict/data/list`, {
    params: query,
  });
};
// 查询字典数据详细
export const fetchDataById = (dictCode: number) => {
  return axios.get<Response<SystemDictData>>(`system/dict/data/${dictCode}`);
};

// 新增字典数据
export const createData = (data: SystemDictData) => {
  return axios.post<Response<SystemDictData>>(`system/data`, data);
};

// 修改字典数据
export const updateData = (data: SystemDictData) => {
  return axios.put<Response<SystemDictData>>(`system/data`, data);
};

// 删除字典数据
export const deleteData = (dictCodes: number[]) => {
  return axios.delete<Response<SystemDictData>>(`system/dict/data/${dictCodes.join(',')}`);
};

export const getOptionsByName = (name: string) => {
  return axios.get(``);
};

type Page = {
  pageSize: number;
  pageNum: number;
};

// 导出字典数据
export const exportData = async (page: Page) => {
  await exportFile({
    url: 'system/dict/data/export',
    data: page,
    fileName: '字典数据.xls',
    method: 'POST',
  });
  message.success(`成功下载`);
};
