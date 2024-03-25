import { deleteUsers, updateUser } from '@/api/modules/system/user/user';
import { message, Modal } from 'ant-design-vue';
import { userForm, userMode, userPosts, userRoles } from '../form/data';
import { userConfig } from './data';

export const delUser = () => {
  Modal.confirm({
    title: 'Whether to perform an operation',
    content: 'The system may be affected',
    async onOk() {
      const { data } = await deleteUsers(userConfig.value.selectedKeys);
      message.success(data.msg);
    },
  });
};
export const editUserConfig = async (id: string) => {
  const { data } = await updateUser(id);
  if (data.data) {
    userForm.value = data.data;
    userRoles.value = data.roles;
    userPosts.value = data.posts;
  }
  userMode.value = 'form';
};
