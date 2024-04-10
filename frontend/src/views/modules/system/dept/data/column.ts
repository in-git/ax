import type { TableColumnProps } from 'ant-design-vue';

const deptColumns = ref<TableColumnProps[]>([
  { title: '部门名称', dataIndex: 'deptName', key: 'deptName' },
  { title: '部门编号', dataIndex: 'deptId', key: 'deptId' },
  { title: '排序', dataIndex: 'orderNum', key: 'orderNum' },
  { title: '负责人', dataIndex: 'leader', key: 'leader' },
  { title: '电话', dataIndex: 'phone', key: 'phone' },
  { title: '邮箱', dataIndex: 'email', key: 'email' },
  { title: '状态', dataIndex: 'status', key: 'status' },
]);

export { deptColumns };
