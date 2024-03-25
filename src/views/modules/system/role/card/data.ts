import type { IQuery } from '@/api/config/types';
import { roleList } from '@/api/modules/system/role/role';
import type { Role } from '@/api/modules/system/role/types';
import type { Dept } from '@/api/modules/system/user/types';
import type { TreeNode } from '@/types/system';
interface RoleData {
  data: Role[];
  roleMenus: TreeNode[];
  menuKeys: number[];
  deptList: Dept[];
  deptKeys: number[];
}

export const roleData = ref<RoleData>({
  data: [],
  roleMenus: [],
  menuKeys: [],
  deptList: [],
  deptKeys: [],
});

export const roleQuery = ref<IQuery>({
  pageNum: 1,
  pageSize: 10,
});

export const getRoles = async () => {
  const { data } = await roleList(roleQuery.value);
  roleData.value.data = data.rows;
};
export const currentRole = ref<Role>();
