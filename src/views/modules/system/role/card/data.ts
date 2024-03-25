import type { IQuery } from '@/api/config/types';
import { roleList } from '@/api/modules/system/role/role';
import type { Role } from '@/api/modules/system/role/types';
interface RoleData {
  data: Role[];
}

export const roleData = ref<RoleData>({
  data: [],
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
