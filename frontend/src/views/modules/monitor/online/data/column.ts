import type { ColumnProps } from '@/types/system';

const onlineColumns = ref<ColumnProps[]>([
  {
    title: '令牌ID',
    dataIndex: 'tokenId',
    show: true,
  },
  {
    title: '部门名称',
    dataIndex: 'deptName',
    show: true,
  },
  {
    title: '用户名',
    dataIndex: 'userName',
    show: true,
  },
  {
    title: 'IP地址',
    dataIndex: 'ipaddr',
    show: true,
  },
  {
    title: '登录位置',
    dataIndex: 'loginLocation',
    show: true,
  },
  {
    title: '浏览器',
    dataIndex: 'browser',
    show: true,
  },
  {
    title: '操作系统',
    dataIndex: 'os',
    show: true,
  },
  {
    title: '登录时间',
    dataIndex: 'loginTime',
    show: true,
  },
]);

export { onlineColumns };
