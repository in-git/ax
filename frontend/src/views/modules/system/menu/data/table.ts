import type { IQuery, TableConfig } from '@/api/config/types';
import type {  SystemMenu } from '@/api/modules/system/menu/types';

//查询参数接口
interface MenuQuery {
  menuName: string ;
  component: string ;
}

let queryObj: IQuery<MenuQuery> = {
  pageNum: 1,
  pageSize: 10,
  total: 0,
  menuName: "" ,
  component: "" ,
};

// 预览模式:卡片|表格
export const viewMode = ref<'card' | 'table'>('table');

// 已选中的元素数组
export const menuKeys = ref<number[]>([]);

export const menuTable = ref<TableConfig<SystemMenu>>({
  //勾选的唯一标识,数据库主键
  rowKey: 'menuId',
  data: [],
  loading: false,
  //必须唯一，存储窗口位置，表头等
  moduleName: 'SystemMenu',
});

//查询参数
export const menuQuery = ref<IQuery<MenuQuery>>({
 ...queryObj,
});

export const resetMenuQuery = () => {
  menuQuery.value = {
    ...queryObj,
  };
};

