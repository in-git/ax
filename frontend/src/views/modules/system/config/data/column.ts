import type { ColumnProps } from '@/types/system';

const configColumns = ref<ColumnProps[]>([
  {
    title: '配置名称',
    dataIndex: 'configName',
    width: 120,
    show: true,
  },
  {
    title: '备注',
    dataIndex: 'remark',
    show: true,
  },

  {
    title: '配置键',
    dataIndex: 'configKey',
    show: true,
  },
  {
    title: '配置值',
    dataIndex: 'configValue',
    show: true,
  },
  {
    title: '系统内置',
    dataIndex: 'configType',
    show: true,
  },
]);
export { configColumns };
