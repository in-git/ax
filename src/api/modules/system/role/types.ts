import type { Dept } from '../user/types';

export interface Role {
  createBy?: any;
  createTime?: any;
  updateBy?: any;
  updateTime?: any;
  remark?: any;
  roleId: number;
  roleName: string;
  roleKey: string;
  roleSort: number;
  dataScope: string;
  menuCheckStrictly: boolean;
  deptCheckStrictly: boolean;
  status: string;
  delFlag?: any;
  flag: boolean;
  menuIds?: any;
  deptIds?: any;
  permissions?: any;
  admin: boolean;
}
export interface RoleDeptTreeData {
  msg: string;
  code: number;
  depts: Dept[];
  checkedKeys: number[];
}
