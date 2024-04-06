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
    title: '配置类型',
    dataIndex: 'configType',
    show: true,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    show: true,
  },
  {
    title: '更新时间',
    dataIndex: 'updateTime',
    show: true,
  },
]);
export { configColumns };
