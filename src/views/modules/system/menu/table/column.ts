import type { TableColumnProps } from 'ant-design-vue';

export const menuColumns: TableColumnProps[] = [
  {
    title: 'Menu name',
    dataIndex: 'menuName',
  },
  {
    title: 'Order',
    dataIndex: 'orderNum',
  },
  {
    title: 'Is frame',
    dataIndex: 'isFrame',
  },
  {
    title: 'Component path',
    dataIndex: 'component',
  },
  {
    title: 'Operation',
    dataIndex: 'operation',
    fixed: 'right',
  },
];
