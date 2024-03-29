import type { TableColumnProps } from 'ant-design-vue';

const dicDataColumns: TableColumnProps[] = [
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
    title: '状态',
    dataIndex: 'status',
  },
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
    title: '字典编码',
    dataIndex: 'dictCode',
  },
  {
    title: '字典排序',
    dataIndex: 'dictSort',
  },
  {
    title: '列表类名',
    dataIndex: 'listClass',
  },
  {
    title: '是否默认',
    dataIndex: 'isDefault',
  },
];

export { dicDataColumns };
