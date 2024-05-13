import type { IQuery, TableConfig } from '@/api/config/types';

export const dataTable = ref<TableConfig<SystemDictData>>({
  //作用：勾选的唯一标识
  rowKey: 'dictCode',
  data: [],
  loading: false,
  moduleName: 'data',
});
//查询参数接口
interface dataQuery {
  dictType: string;
  status: string;
}
// 预览模式:卡片|表格
export const viewMode = ref<'card' | 'table'>('table');

//查询参数
export const dataQuery = ref<IQuery<dataQuery>>({
  pageNum: 1,
  pageSize: 10,
  total: 0,
  status: '',
  dictType: '',
});

// 已选中的元素数组
export const dataKeys = ref<number[]>([]);
