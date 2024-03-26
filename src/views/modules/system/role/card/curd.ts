import { delRole, deptTree, roleList, roleMenuTreeSelect } from '@/api/modules/system/role/role';
import { message, Modal } from 'ant-design-vue';
import { currentRole, roleData, roleQuery } from './data';

export const selectRole = async (id: number) => {
  const { data } = await roleMenuTreeSelect(id);
  if (currentRole.value) {
    roleData.value.roleMenus = data.menus;
    currentRole.value.menuIds = data.checkedKeys;
  }
};
export const getDeptTree = async (id: number) => {
  if (currentRole.value) {
    const { data } = await deptTree(id);
    roleData.value.deptList = data.depts;
    currentRole.value.deptIds = data.checkedKeys;
  }
};
export const getRoles = async () => {
  const { data } = await roleList(roleQuery.value);
  roleData.value.data = data.rows;
};
export const delRoles = () => {
  Modal.confirm({
    centered: true,
    async onOk() {
      if (currentRole.value && currentRole.value.roleId) {
        const { data } = await delRole(currentRole.value?.roleId);
        await getRoles();
        message.success(data.msg);
      }
    },
    title: 'Warning',
    content: 'This could have an impact on your system',
  });
};
