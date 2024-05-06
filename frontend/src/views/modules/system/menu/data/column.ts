import type { TableColumnProps } from 'ant-design-vue';

export const menuColumns: TableColumnProps[] = [
  {
    title: '菜单名',
    dataIndex: 'menuName',
  },
  {
    title: '顺序',
    dataIndex: 'orderNum',
    width: 100,
  },
  {
    title: '是否为链接',
    dataIndex: 'isFrame',
  },
  {
    title: '菜单类型',
    dataIndex: 'menuType',
  },
  {
    title: '组件路径',
    dataIndex: 'component',
  },
];
