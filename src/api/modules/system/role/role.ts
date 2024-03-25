import type { IQuery, TableResponse } from '@/api/config/types';
import type { TreeNode } from '@/types/system';
import axios from 'axios';
import type { Role } from './types';

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
