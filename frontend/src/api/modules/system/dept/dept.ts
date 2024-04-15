import type { IQuery, Response } from '@/api/config/types';
import axios from 'axios';
import type { SystemDept } from './types';

// 查询部门列表
export const fetchDeptList = (query: IQuery) => {
  return axios.get<Response<SystemDept[]>>(`system/dept/list`, {
    params: query,
  });
};
// 查询部门详细
export const fetchDeptById = (deptId: number) => {
  return axios.get<Response<SystemDept>>(`system/dept/${deptId}`);
};

// 新增部门
export const createDept = (data: SystemDept) => {
  return axios.post<Response<SystemDept>>(`system/dept`, data);
};

// 修改部门
export const updateDept = (data: SystemDept) => {
  return axios.put<Response<SystemDept>>(`/system/dept`, data);
};

// 删除部门
export const deleteDept = (deptIds: number[]) => {
  return axios.delete<Response<SystemDept>>(`system/dept/${deptIds.join(',')}`);
};
