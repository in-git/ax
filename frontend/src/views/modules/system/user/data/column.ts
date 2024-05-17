import type { TableColumnProps } from 'ant-design-vue';

const userColumns = ref<TableColumnProps[]>([
  {
    title: '用户账号',
    dataIndex: 'userName',
  },
  {
    title: '用户昵称',
    dataIndex: 'nickName',
  },
  {
    title: '手机号码',
    dataIndex: 'phonenumber',
  },
  {
    title: '用户性别',
    dataIndex: 'sex',
  },
  {
    title: '头像地址',
    dataIndex: 'avatar',
  },
  {
    title: '帐号状态',
    dataIndex: 'status',
  },
  {
    title: '最后登录IP',
    dataIndex: 'loginIp',
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
]);

export { userColumns };
