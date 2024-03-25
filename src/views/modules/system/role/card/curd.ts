import { roleMenuTreeSelect } from '@/api/modules/system/role/role';
import { roleData } from './data';

export const selectRole = async (id: number) => {
  const { data } = await roleMenuTreeSelect(id);
  roleData.value.roleMenus = data.menus;
  console.log(data.menus);
};
