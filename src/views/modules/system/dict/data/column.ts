import type { TableColumnProps } from 'ant-design-vue';

const dictColumns: TableColumnProps[] = [
  {
    title: '创建者',
    dataIndex: 'createBy',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
  {
    title: '字典名称',
    dataIndex: 'dictName',
  },
  {
    title: '字典类型',
    dataIndex: 'dictType',
  },
  {
    title: '状态',
    dataIndex: 'status',
  },
];

export { dictColumns };
