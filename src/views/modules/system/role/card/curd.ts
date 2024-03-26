import { deptTree, roleMenuTreeSelect } from '@/api/modules/system/role/role';
import { currentRole, roleData } from './data';

export const selectRole = async (id: number) => {
  const { data } = await roleMenuTreeSelect(id);
  if (currentRole.value) {
    roleData.value.roleMenus = data.menus;
    roleData.value.menuKeys = data.checkedKeys;
    currentRole.value.menuIds = data.checkedKeys;
  }
};
export const getDeptTree = async (id: number) => {
  if (currentRole.value) {
    const { data } = await deptTree(id);
    roleData.value.deptList = data.depts;
    roleData.value.deptKeys = data.checkedKeys;
    currentRole.value.deptIds = data.checkedKeys;
  }
};
