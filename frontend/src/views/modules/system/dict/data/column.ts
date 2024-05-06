import type { ColumnProps } from '@/types/system';

const dictColumns = ref<ColumnProps[]>([
  {
    title: '字典名称',
    dataIndex: 'dictName',
  },
  {
    title: '创建者',
    dataIndex: 'createBy',
  },

  {
    title: '备注',
    dataIndex: 'remark',
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
    title: '创建时间',
    dataIndex: 'createTime',
  },
]);

export { dictColumns };
