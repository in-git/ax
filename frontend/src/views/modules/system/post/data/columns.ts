import type { ColumnProps } from '@/types/system';

export const postColumns = ref<ColumnProps[]>([
  {
    title: '岗位名称',
    dataIndex: 'postName',
    key: 'postName',
  },
  {
    title: '岗位编码',
    dataIndex: 'postCode',
    key: 'postCode',
  },
  {
    title: '创建人',
    dataIndex: 'createBy',
    key: 'createBy',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
  },
  {
    title: '备注',
    dataIndex: 'remark',
    key: 'remark',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
  },
]);

export default {
  postColumns,
};
