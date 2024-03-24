import { deleteUsers } from '@/api/modules/system/user/user';
import { message, Modal } from 'ant-design-vue';
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
