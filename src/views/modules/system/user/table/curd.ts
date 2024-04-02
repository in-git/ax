import { deleteUsers, getUser, userList } from '@/api/modules/system/user/user';
import { message, Modal } from 'ant-design-vue';
import { resetUserForm, showUserForm, userForm, userPosts, userRoles } from '../form/data';
import { userConfig, userQuery } from './data';

export const delUser = (id?: number) => {
  Modal.confirm({
    title: 'Whether to perform an operation',
    content: 'The system may be affected',
    async onOk() {
      let ids = [];
      if (id) {
        ids = [id];
      } else {
        ids = userConfig.value.selectedKeys;
      }
      const { data } = await deleteUsers(ids);

      await loadUserData();
      message.success(data.msg);
    },
  });
};
export const editUserConfig = async (id?: string) => {
  const { data } = await getUser(id || '');

  if (data.data) {
    userForm.value = data.data;

    userForm.value.roleIds = data.roleIds;
    userForm.value.postIds = data.postIds;
  }
  userRoles.value = data.roles;
  userPosts.value = data.posts;

  showUserForm.value = true;
};
export const createUser = () => {
  showUserForm.value = false;
  resetUserForm();
};
export const loadUserData = async () => {
  userConfig.value.loading = true;
  const { data } = await userList(userQuery.value);
  userConfig.value.data = data.rows;
  userQuery.value.total = data.total;
  userConfig.value.loading = false;
};
