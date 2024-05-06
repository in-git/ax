import type { SystemDept } from '../dept/types';

export interface SystemRole {
  createBy?: any;
  createTime?: any;
  updateBy?: any;
  updateTime?: any;
  remark?: any;
  roleId: number | undefined;
  roleName: string;
  roleKey: string;
  roleSort: number;
  dataScope: string;
  menuCheckStrictly: boolean;
  deptCheckStrictly: boolean;
  status: string;
  delFlag?: any;
  flag: boolean;
  menuIds: number[];
  deptIds?: any;
  permissions?: string[];
  admin: boolean;
}
export interface RoleDeptTreeData {
  msg: string;
  code: number;
  depts: SystemDept[];
  checkedKeys: number[];
}
