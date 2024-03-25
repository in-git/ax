import type { Role } from '@/api/modules/system/role/types';

const roleObj: Role = {
  roleId: 0,
  roleName: '',
  roleKey: '',
  roleSort: 0,
  dataScope: '',
  menuCheckStrictly: false,
  deptCheckStrictly: false,
  status: '',
  flag: false,
  admin: false,
};
export const roleForm = ref<Role>({
  ...roleObj,
});

export const resetRoleForm = () => {
  roleForm.value = {
    ...roleObj,
  };
};
