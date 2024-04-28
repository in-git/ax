import type { TableColumnProps } from 'ant-design-vue';

const roleColumns = ref<TableColumnProps[]>([
  {
    title: '角色名称',
    dataIndex: 'roleName',
  },
  {
    title: '角色权限字符串',
    dataIndex: 'roleKey',
  },
  {
    title: '显示顺序',
    dataIndex: 'roleSort',
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
]);

export { roleColumns };
