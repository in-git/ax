import { deleteRole, fetchRoleList, roleMenuTreeSelect } from '@/api/modules/system/role/role';
import { response } from '@/utils/table/table';
import { getDeptTree } from '../card/curd';
import { currentRole, roleData } from '../card/data';
import { resourceModal, roleResetForm, roleShowForm, showRoleForm } from './form';
import { roleKeys, roleQuery, roleTable } from './table';

export const roleList = async () => {
  try {
    roleTable.value.loading = true;
    const { data } = await fetchRoleList(roleQuery.value);
    roleTable.value.data = data.rows;
    roleQuery.value.total = data.total;
    roleTable.value.loading = false;
  } catch (error) {
    roleTable.value.loading = false;
  }
};
export const selectRole = async (id?: number) => {
  let targetId = 0;
  if (id) {
    targetId = id;
  } else if (currentRole.value) {
    targetId = currentRole.value.roleId;
  }

  const { data } = await roleMenuTreeSelect(targetId);
  if (currentRole.value) {
    roleData.value.roleMenus = data.menus;
    currentRole.value.menuIds = data.checkedKeys;
  }
  showRoleForm.value = true;
};

export const roleCreate = async () => {
  roleResetForm();
  roleShowForm.value = true;
};

export const roleDelete = async (id?: number) => {
  let ids = id ? [id] : roleKeys.value;
  await response(deleteRole, ids);
  await roleList();
  roleKeys.value = [];
};

export const allocatingResource = async () => {
  if (currentRole.value) {
    await getDeptTree(currentRole.value.roleId);
    resourceModal.value = true;
  }
};
