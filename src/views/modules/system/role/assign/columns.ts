import type { TableColumnProps } from 'ant-design-vue/es/components';

export const userColumns: TableColumnProps[] = [
  {
    title: 'Username',
    dataIndex: 'userName',
  },
  {
    title: 'Nickname',
    dataIndex: 'nickName',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Remark',
    dataIndex: 'remark',
  },
  {
    title: 'Operation',
    dataIndex: 'operation',
  },
];
export default {
  userColumns,
};
