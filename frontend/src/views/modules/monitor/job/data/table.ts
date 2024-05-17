import type { IQuery, TableConfig } from '@/api/config/types';
import type { SystemJob } from '@/api/modules/monitor/job/types';

export const jobTable = ref<TableConfig<SystemJob>>({
  //作用：勾选的唯一标识
  rowKey: 'jobId',
  data: [],
  loading: false,
  moduleName: 'job',
});
//查询参数接口
interface jobQuery {
  misfirePolicy: '';
  concurrent: '';
  status: '';
}
// 预览模式:卡片|表格
export const viewMode = ref<'card' | 'table'>('table');

//查询参数
export const jobQuery = ref<IQuery<jobQuery>>({
  pageNum: 1,
  pageSize: 10,
  total: 0,
  misfirePolicy: '',
  concurrent: '',
  status: '',
});

// 已选中的元素数组
export const jobKeys = ref<string[]>([]);
