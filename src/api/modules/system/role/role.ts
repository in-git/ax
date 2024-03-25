import type { IQuery, Response, TableResponse } from '@/api/config/types';
import type { TreeNode } from '@/types/system';
import axios from 'axios';
import type { Role, RoleDeptTreeData } from './types';

export const roleList = (query: IQuery) => {
  return axios.get<TableResponse<Role>>(`system/role/list`, {
    params: query,
  });
};

interface RoleMenuTree {
  msg: string;
  code: number;
  menus: TreeNode[];
  checkedKeys: number[];
}

export const roleMenuTreeSelect = (id: number) => {
  return axios.get<RoleMenuTree>(`system/menu/roleMenuTreeselect/${id}`);
};

export const deptTree = (id: number) => {
  return axios.get<RoleDeptTreeData>(`system/role/deptTree/${id}`);
};

export const roleDataScope = (data: Role) => {
  return axios.put<Response>(`system/role/dataScope`, data);
};
export const updateRole = (data: Role) => {
  return axios.put<Response>(`system/role`, data);
};
export const createRole = (data: Role) => {
  return axios.post<Response>(`system/role`, data);
};
