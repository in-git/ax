
import type { IQuery, Response, TableResponse } from '@/api/config/types';
import axios from 'axios';
import type {SystemConfig} from "./types"

// 查询参数配置列表
export const fetchConfigList = (query: IQuery) => {
  return axios.get<TableResponse<SystemConfig>>(`system/config/list`, {
    params: query,
  });
};
// 查询参数配置详细
export const fetchConfigById = (configId: number) => {
  return axios.get<Response<SystemConfig>>(`system/config/${configId}`);
};

// 新增参数配置
export const createConfig= (data: SystemConfig) => {
  return axios.post<Response<SystemConfig>>(`system/config`, data);
};

// 修改参数配置
export const updateConfig = (data: SystemConfig) => {
  return axios.put<Response<SystemConfig>>(`/system/config`, data);
};

// 删除参数配置
export const deleteConfig = (configIds:number[]) => {
  return axios.delete<Response<SystemConfig>>(`system/config/${configIds.join(',')}`);
};



