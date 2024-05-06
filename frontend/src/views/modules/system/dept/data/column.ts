import type { TableColumnProps } from 'ant-design-vue';

const deptColumns = ref<TableColumnProps[]>([
  {
    title: '部门名称',
    dataIndex: 'deptName',
  },
  {
    title: '显示顺序',
    dataIndex: 'orderNum',
  },
  {
    title: '负责人',
    dataIndex: 'leader',
  },
  {
    title: '联系电话',
    dataIndex: 'phone',
  },
  {
    title: '部门状态',
    dataIndex: 'status',
  },
]);

export { deptColumns };
