import type { TableColumnProps } from 'ant-design-vue';

const jobColumns = ref<TableColumnProps[]>([
  { title: '更新时间', dataIndex: 'updateTime' },
  { title: '备注', dataIndex: 'remark' },
  { title: '任务名称', dataIndex: 'jobName' },
  { title: '任务分组', dataIndex: 'jobGroup' },
  { title: '调用目标', dataIndex: 'invokeTarget' },
  { title: 'CRON表达式', dataIndex: 'cronExpression' },
  { title: '错失策略', dataIndex: 'misfirePolicy' },
  { title: '并发', dataIndex: 'concurrent' },
  { title: '状态', dataIndex: 'status' },
  { title: '下次有效时间', dataIndex: 'nextValidTime' },
  { title: '创建时间', dataIndex: 'createTime' },
]);

export { jobColumns };
