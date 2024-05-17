import type { IQuery, TableConfig } from '@/api/config/types';
import type { SystemDept } from '@/api/modules/system/dept/types';

export const deptTable = ref<TableConfig<SystemDept>>({
  //作用：勾选的唯一标识
  rowKey: 'deptId',
  data: [],
  loading: false,
  moduleName: 'dept',
});

//查询参数接口
interface deptQuery {
  deptName: '';
  leader: '';
  phone: '';
  status: '';
}
// 预览模式:卡片|表格
export const viewMode = ref<'card' | 'table'>('table');

//查询参数
export const deptQuery = ref<IQuery<deptQuery>>({
  pageNum: 1,
  pageSize: 10,
  total: 0,
  deptName: '',
  leader: '',
  phone: '',
  status: '',
});

//已选中的元素数组
export const deptKeys = ref<number[]>([]);
