import type { TableColumnProps } from 'ant-design-vue';

const columns: TableColumnProps[] = [
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
    title: 'Login ip',
    dataIndex: 'loginIp',
  },
  {
    title: 'Phone',
    dataIndex: 'phonenumber',
  },
  {
    title: 'remark',
    dataIndex: 'remark',
  },
  {
    title: 'Operation',
    dataIndex: 'operation',
  },
];

export default columns;
