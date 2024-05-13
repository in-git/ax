import type { TableColumnProps } from 'ant-design-vue';

const typeColumns = ref<TableColumnProps[]>([
  {
    title: '字典名称',
    dataIndex: 'dictName',
  },
  {
    title: '字典类型',
    dataIndex: 'dictType',
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
]);

export { typeColumns };
