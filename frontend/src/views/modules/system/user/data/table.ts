import { DeleteOutlined, LockOutlined } from '@ant-design/icons-vue';
import type { ItemType } from 'ant-design-vue';
import { passwordModal } from '../table/change-password/data';
import { delUser } from './curd';

//操作的下拉菜单
export const userOperationList: ItemType[] = [
  {
    label: '删除用户',
    key: 'delete',
    icon: h(DeleteOutlined),
    async onClick() {
      delUser();
    },
  },
  {
    label: '修改密码',
    key: 'update',
    icon: h(LockOutlined),
    async onClick() {
      passwordModal.value = true;
    },
  },
];
