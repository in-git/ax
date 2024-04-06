import type { TableColumnProps } from 'ant-design-vue';

export const menuColumns: TableColumnProps[] = [
  {
    title: 'Menu name',
    dataIndex: 'menuName',
  },
  {
    title: 'Order',
    dataIndex: 'orderNum',
    width: 100,
  },
  {
    title: 'Is frame',
    dataIndex: 'isFrame',
  },
  {
    title: 'Menu type',
    dataIndex: 'menuType',
  },
  {
    title: 'Component path',
    dataIndex: 'component',
  },
];
