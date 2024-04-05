import type { TableColumnProps } from 'ant-design-vue/es/components';

export const userColumns: TableColumnProps[] = [
  { title: '用户名', dataIndex: 'userName' },
  { title: '昵称', dataIndex: 'nickName' },
  { title: '邮箱', dataIndex: 'email' },
  { title: '备注', dataIndex: 'remark' },
];

export default {
  userColumns,
};
