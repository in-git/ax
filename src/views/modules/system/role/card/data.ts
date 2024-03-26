import type { IQuery } from '@/api/config/types';
import type { Role } from '@/api/modules/system/role/types';
import type { Dept } from '@/api/modules/system/user/types';
import type { TreeNode } from '@/types/system';

interface RoleData {
  data: Role[];
  roleMenus: TreeNode[];
  deptList: Dept[];
}

export const roleData = ref<RoleData>({
  data: [],
  roleMenus: [],
  deptList: [],
});

export const roleQuery = ref<IQuery>({
  pageNum: 1,
  pageSize: 10,
});

export const currentRole = ref<Role>();
export const roleObject: Role = {
  roleId: 0,
  roleName: '',
  roleKey: '',
  roleSort: 0,
  dataScope: '',
  menuCheckStrictly: false,
  deptCheckStrictly: false,
  status: '0',
  flag: false,
  menuIds: [],
  admin: false,
};
