import type { IQuery } from '@/api/config/types';
import type { SystemDept } from '@/api/modules/system/dept/types';
import type { SystemRole } from '@/api/modules/system/role/types';
import type { TreeNode } from '@/types/system';

interface RoleData {
  data: SystemRole[];
  roleMenus: TreeNode[];
  deptList: SystemDept[];
}
export const roleSpinning = ref(true);
export const roleData = ref<RoleData>({
  data: [],
  roleMenus: [],
  deptList: [],
});
interface RoleQuery {
  roleName: string;
}
export const roleQuery = ref<IQuery<RoleQuery>>({
  pageNum: 1,
  pageSize: 10,
  roleName: '',
  total: 0,
});

export const currentRole = ref<SystemRole>();
export const roleObject: SystemRole = {
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
