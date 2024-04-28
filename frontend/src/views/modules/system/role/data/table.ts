import type { IQuery, TableConfig } from '@/api/config/types';
import type { SystemRole } from '@/api/modules/system/role/types';

export const roleTable = ref<TableConfig<SystemRole>>({
  //这里根据实际情况修改
  //作用：勾选的唯一标识
  rowKey: 'roleId',
  data: [],
  loading: false,
  moduleName: 'role',
});
//查询参数接口
interface roleQuery {
  roleName: '';
}
export const roleMenus = ref();
export const deptList = ref();
// 预览模式:卡片|表格
export const viewMode = ref<'card' | 'table'>('table');

//查询参数
export const roleQuery = ref<IQuery<roleQuery>>({
  pageNum: 1,
  pageSize: 10,
  total: 0,
  roleName: '',
});

// 已选中的元素数组
export const roleKeys = ref<number[]>([]);
