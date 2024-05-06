import {
  deleteRole,
  deptTree,
  fetchRoleList,
  getRoleById,
  roleMenuTreeSelect,
} from '@/api/modules/system/role/role';
import { response } from '@/utils/table/table';
import { message, Modal } from 'ant-design-vue';
import { resourceModal, roleForm, roleResetForm, roleShowForm, showRoleForm } from './form';
import { deptList, roleKeys, roleMenus, roleQuery, roleTable } from './table';

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
  } else if (roleForm.value && roleForm.value.roleId) {
    targetId = roleForm.value.roleId;
  }
  const { data: roleInfo } = await getRoleById(targetId);
  if (roleInfo.data) roleForm.value = roleInfo.data;
  const { data } = await roleMenuTreeSelect(targetId);
  if (roleForm.value) {
    roleMenus.value = data.menus;
    roleForm.value.menuIds = data.checkedKeys;
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
  if (roleForm.value && roleForm.value.roleId) {
    await getDeptTree(roleForm.value.roleId);
    resourceModal.value = true;
  }
};

export const getDeptTree = async (id: number) => {
  if (roleForm.value) {
    const { data } = await deptTree(id);
    deptList.value = data.depts;
    roleForm.value.deptIds = data.checkedKeys;
  }
};

export const delRoles = () => {
  Modal.confirm({
    title: '警告',
    content: '该操作可能影响系统运行',
    async onOk() {
      if (roleForm.value && roleForm.value.roleId) {
        const { data } = await deleteRole(roleForm.value?.roleId);
        await roleList();
        message.success(data.msg);
      }
    },
    centered: true,
  });
};
