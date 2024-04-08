import type { IQuery } from '@/api/config/types';
import {
  allocatedList,
  assignAuthUser,
  authUserCancel,
  unallocatedList,
} from '@/api/modules/system/role/role';
import type { UserProfileData } from '@/api/modules/system/user/types';
import { Modal, message } from 'ant-design-vue';
import type { Key } from 'ant-design-vue/es/_util/type';
import { currentRole } from '../card/data';

export const allocateUserModal = ref(false);

export const allocateUsers = async () => {
  if (currentRole.value) {
    loading.value = true;
    userQuery.value.roleId = currentRole.value.roleId;
    const { data } = await allocatedList(userQuery.value);
    userData.value.data = data.rows;
    userQuery.value.total = data.total;
    loading.value = false;
    allocateUserModal.value = true;
    modeConfig.value = {
      title: '已分配用户',
      mode: 'assign',
    };
  }
};

export const unassignUsers = async () => {
  if (!currentRole.value) return;
  userQuery.value.roleId = currentRole.value.roleId;
  const { data } = await unallocatedList(userQuery.value);
  allocateUserModal.value = true;
  userData.value.data = data.rows;
  userQuery.value.total = data.total;
  loading.value = false;
  modeConfig.value = {
    title: '取消分配',
    mode: 'unassign',
  };
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

export const userQuery = ref<IQuery<{ roleId: number | undefined }>>({
  pageNum: 1,
  pageSize: 10,
  total: 0,
  roleId: undefined,
});

export const onChange = (keys: Key[]) => {
  userData.value.selectedKeys = keys.map(e => Number(e));
};
export const modeConfig = ref({
  title: '',
  mode: '',
});
export const assign = (userId: number) => {
  Modal.confirm({
    title: '警告',
    content: '该操作可能影响系统运行',
    async onOk() {
      if (!currentRole.value) return;
      const { data } = await authUserCancel(currentRole.value.roleId, userId);
      message.success(data);
    },
    centered: true,
  });
};
export const unassign = async (userId: number) => {
  if (!currentRole.value) return;
  const { data } = await assignAuthUser(currentRole.value.roleId, userId);
  message.success(data);
};
