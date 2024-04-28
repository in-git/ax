import { deleteRole, deptTree } from '@/api/modules/system/role/role';
import { message, Modal } from 'ant-design-vue';
import { roleList } from '../data/curd';
import { currentRole, roleData, roleObject } from './data';

export const getDeptTree = async (id: number) => {
  if (currentRole.value) {
    const { data } = await deptTree(id);
    roleData.value.deptList = data.depts;
    currentRole.value.deptIds = data.checkedKeys;
  }
};

export const delRoles = () => {
  Modal.confirm({
    title: '警告',
    content: '该操作可能影响系统运行',
    async onOk() {
      if (currentRole.value && currentRole.value.roleId) {
        const { data } = await deleteRole(currentRole.value?.roleId);
        await roleList();
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
