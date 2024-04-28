import type { IQuery, TableConfig } from '@/api/config/types';
import type { SystemTest } from '@/api/modules/system/test/types';

export const testTable = ref<TableConfig<SystemTest>>({
  //这里根据实际情况修改
  //作用：勾选的唯一标识
  rowKey: 'testId',
  data: [],
  loading: false,
  moduleName: 'test',
});
//查询参数接口
interface testQuery {}
// 预览模式:卡片|表格
export const viewMode = ref<'card' | 'table'>('table');

//查询参数
export const testQuery = ref<IQuery<testQuery>>({
  pageNum: 1,
  pageSize: 10,
  total: 0,
});

// 已选中的元素数组
export const testKeys = ref<number[]>([]);
