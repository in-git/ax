import { delRole, deptTree, roleList, roleMenuTreeSelect } from '@/api/modules/system/role/role';
import { message, Modal } from 'ant-design-vue';
import { showRoleForm } from '../info/data';
import { currentRole, roleData, roleObject, roleQuery, roleSpinning } from './data';

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

export const getDeptTree = async (id: number) => {
  if (currentRole.value) {
    const { data } = await deptTree(id);
    roleData.value.deptList = data.depts;
    currentRole.value.deptIds = data.checkedKeys;
  }
};

export const getRoles = async () => {
  roleSpinning.value = true;
  const { data } = await roleList(roleQuery.value);
  roleData.value.data = data.rows;
  roleSpinning.value = false;
};

export const delRoles = () => {
  Modal.confirm({
    title: '警告',
    content: '该操作可能影响系统运行',
    async onOk() {
      if (currentRole.value && currentRole.value.roleId) {
        const { data } = await delRole(currentRole.value?.roleId);
        await getRoles();
        message.success(data.msg);
      }
    },
    centered: true,
  });
};

export const resetRoleForm = () => {
  currentRole.value = {
    ...roleObject,
  };
};
