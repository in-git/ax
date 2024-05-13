import type { TableColumnProps } from 'ant-design-vue';

const jobColumns = ref<TableColumnProps[]>([
  {
    title: '任务名称',
    dataIndex: 'jobName',
  },
  {
    title: '任务组名',
    dataIndex: 'jobGroup',
  },
  {
    title: 'cron执行表达式',
    dataIndex: 'cronExpression',
  },
  {
    title: '计划执行错误策略',
    dataIndex: 'misfirePolicy',
  },
  {
    title: '是否并发执行',
    dataIndex: 'concurrent',
  },
  {
    title: '状态',
    dataIndex: 'status',
  },
  {
    title: '备注信息',
    dataIndex: 'remark',
  },
]);

export { jobColumns };
