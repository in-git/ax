import type { TableColumnProps } from 'ant-design-vue';

const postColumns = ref<TableColumnProps[]>([
  {
    title: '岗位编码',
    dataIndex: 'postCode',
  },
  {
    title: '岗位名称',
    dataIndex: 'postName',
  },
  {
    title: '显示顺序',
    dataIndex: 'postSort',
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
]);

export { postColumns };
