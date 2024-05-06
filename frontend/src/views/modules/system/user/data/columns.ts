import type { TableColumnProps } from 'ant-design-vue';

const columns: TableColumnProps[] = [
  { title: '用户名', dataIndex: 'userName' },
  { title: '昵称', dataIndex: 'nickName' },
  { title: '邮箱', dataIndex: 'email' },
  { title: '登录IP', dataIndex: 'loginIp' },
  { title: '电话', dataIndex: 'phonenumber' },
  { title: '备注', dataIndex: 'remark' },
  { title: '操作', dataIndex: 'operation' },
];

export default columns;
