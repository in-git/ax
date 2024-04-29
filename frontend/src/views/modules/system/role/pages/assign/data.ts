import type { IQuery } from '@/api/config/types';
import {
  allocatedList,
  assignAuthUser,
  authUserCancel,
  unallocatedList,
} from '@/api/modules/system/role/role';
import type { UserProfileData } from '@/api/modules/system/user/types';
import { response } from '@/utils/table/table';
import { Modal } from 'ant-design-vue';
import type { Key } from 'ant-design-vue/es/_util/type';
import { roleForm } from '../../data/form';

export const allocateUserModal = ref(false);
export const unAssignModal = ref(false);

/* 未分配的用户 ，需要授权*/
export const allocateUsers = async () => {
  if (roleForm.value) {
    loading.value = true;
    userQuery.value.roleId = roleForm.value.roleId;
    const { data } = await unallocatedList(userQuery.value);
    userData.value.data = data.rows;
    userQuery.value.total = data.total;
    loading.value = false;
    allocateUserModal.value = true;
  }
};
/* 已分配的用户，需要取消授权 */
export const unassignUsers = async () => {
  if (!roleForm.value) return;
  userQuery.value.roleId = roleForm.value.roleId;
  const { data } = await allocatedList(userQuery.value);
  allocateUserModal.value = true;
  userData.value.data = data.rows;
  userQuery.value.total = data.total;
  loading.value = false;
};

export const loading = ref(false);

interface UserData {
  data: UserProfileData[];
  selectedKeys: number[];
}

export const userData = ref<UserData>({
  data: [],
  selectedKeys: [],
});

interface UserQuery {
  roleId: number | undefined;
  userName: string | undefined;
}

/* 查询参数 */
export const userQuery = ref<IQuery<UserQuery>>({
  pageNum: 1,
  pageSize: 10,
  total: 0,
  roleId: undefined,
  userName: '',
});

export const onChange = (keys: Key[]) => {
  userData.value.selectedKeys = keys.map(e => Number(e));
};

export const assign = async (userId?: number) => {
  if (!roleForm.value) return;
  let ids = userId ? [userId] : userData.value.selectedKeys;
  await response(assignAuthUser, roleForm.value.roleId, [ids]);
  await allocateUsers();
  userData.value.selectedKeys = [];
};

export const unassign = async (userId?: number) => {
  let ids = userId ? [userId] : userData.value.selectedKeys;
  Modal.confirm({
    title: '警告',
    content: '该操作可能影响系统运行',
    async onOk() {
      if (!roleForm.value || !roleForm.value.roleId) return;
      await authUserCancel(roleForm.value.roleId, ids);
      await unassignUsers();
      userData.value.selectedKeys = [];
    },
    centered: true,
  });
};
