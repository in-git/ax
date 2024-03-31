import type { TableColumnProps } from 'ant-design-vue';

const onlineColumns: TableColumnProps[] = [
  {
    title: '令牌ID',
    dataIndex: 'tokenId',
  },
  {
    title: '部门名称',
    dataIndex: 'deptName',
  },
  {
    title: '用户名',
    dataIndex: 'userName',
  },
  {
    title: 'IP地址',
    dataIndex: 'ipaddr',
  },
  {
    title: '登录位置',
    dataIndex: 'loginLocation',
  },
  {
    title: '浏览器',
    dataIndex: 'browser',
  },
  {
    title: '操作系统',
    dataIndex: 'os',
  },
  {
    title: '登录时间',
    dataIndex: 'loginTime',
  },
];

export { onlineColumns };
