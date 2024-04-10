import type { TableColumnProps } from 'ant-design-vue';

const dictDataColumns: TableColumnProps[] = [
  {
    title: '字典标签',
    dataIndex: 'dictLabel',
  },
  {
    title: '字典值',
    dataIndex: 'dictValue',
  },
  {
    title: '字典类型',
    dataIndex: 'dictType',
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
  {
    title: '字典编码',
    dataIndex: 'dictCode',
  },
  {
    title: '是否默认',
    dataIndex: 'isDefault',
  },
  {
    title: '状态',
    dataIndex: 'status',
  },
];

export { dictDataColumns };
