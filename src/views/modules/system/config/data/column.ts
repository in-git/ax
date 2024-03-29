import type { TableColumnProps } from 'ant-design-vue';

const configColumns: TableColumnProps[] = [
  {
    title: '配置名称',
    dataIndex: 'configName',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
  },
  {
    title: '更新时间',
    dataIndex: 'updateTime',
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },

  {
    title: '配置键',
    dataIndex: 'configKey',
  },
  {
    title: '配置值',
    dataIndex: 'configValue',
  },
  {
    title: '配置类型',
    dataIndex: 'configType',
  },
];
export { configColumns };
