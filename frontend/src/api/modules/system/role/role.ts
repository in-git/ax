import type { IQuery, Response, TableResponse } from '@/api/config/types';
import type { TreeNode } from '@/types/system';
import axios from 'axios';
import type { UserProfileData } from '../user/types';
import type { RoleDeptTreeData, SystemRole } from './types';

export const fetchRoleList = (query: IQuery) => {
  return axios.get<TableResponse<SystemRole>>(`system/role/list`, {
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

export const roleTreeSelect = () => {
  return axios.get<Response<TreeNode[]>>(`system/menu/treeselect`);
};

export const deptTree = (id: number) => {
  return axios.get<RoleDeptTreeData>(`system/role/deptTree/${id}`);
};

export const roleDataScope = (data: SystemRole) => {
  return axios.put<Response>(`system/role/dataScope`, data);
};

export const updateRole = (data: SystemRole) => {
  return axios.put<Response>(`system/role`, data);
};

export const createRole = (data: SystemRole) => {
  return axios.post<Response>(`system/role`, data);
};

export const deleteRole = (id: number) => {
  return axios.delete<Response>(`system/role/${id}`);
};

export const allocatedList = (query: IQuery) => {
  return axios.get<TableResponse<UserProfileData>>(`system/role/authUser/allocatedList`, {
    params: query,
  });
};

export const unallocatedList = (query: IQuery) => {
  return axios.get<TableResponse<UserProfileData>>(`system/role/authUser/unallocatedList`, {
    params: query,
  });
};

export const authUserCancel = (roleId: number, userIds: number[]) => {
  return axios.put(`system/role/authUser/cancelAll?roleId=${roleId}&userIds=${userIds.join(',')}`);
};

export const assignAuthUser = (roleId: number, userIds: number[]) => {
  return axios.put(`system/role/authUser/selectAll?roleId=${roleId}&userIds=${userIds.join(',')}`);
};
