import type { IQuery, TableConfig } from '@/api/config/types';
import type {  SystemPost } from '@/api/modules/system/post/types';

//查询参数接口
interface postQuery {
  postCode: string ;
  postName: string ;
  postSort: 0 ;
  status: string ;
}

let queryObj: IQuery<noticeQuery> = {
  pageNum: 1,
  pageSize: 10,
  total: 0,
  postCode: "" ,
  postName: "" ,
  postSort: 0 ,
  status: "" ,
};

// 预览模式:卡片|表格
export const viewMode = ref<'card' | 'table'>('table');

// 已选中的元素数组
export const postKeys = ref<number[]>([]);

export const postTable = ref<TableConfig<SystemPost>>({
  //勾选的唯一标识,数据库主键
  rowKey: 'postId',
  data: [],
  loading: false,
  //必须唯一，存储窗口位置，表头等
  moduleName: 'SystemPost',
});



//查询参数
export const postQuery = ref<IQuery<postQuery>>({
 ...queryObj,
});

export const resetPostQuery = () => {
  noticeQuery.value = {
    ...queryObj,
  };
};

