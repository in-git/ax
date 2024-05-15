import type { IQuery, TableConfig } from '@/api/config/types';
import type { SystemNotice } from '@/api/modules/system/notice/types';

//查询参数接口
interface noticeQuery {
  noticeTitle: string;
  noticeType: string;
  status: string;
}
let queryObj: IQuery<noticeQuery> = {
  pageNum: 1,
  pageSize: 10,
  total: 0,
  noticeTitle: '',
  noticeType: '',
  status: '',
};

// 已选中的元素数组
export const noticeKeys = ref<number[]>([]);

export const noticeTable = ref<TableConfig<SystemNotice>>({
  //作用：勾选的唯一标识
  rowKey: 'noticeId',
  data: [],
  loading: false,
  moduleName: 'notice',
});

// 预览模式:卡片|表格
export const viewMode = ref<'card' | 'table'>('table');

//查询参数
export const noticeQuery = ref<IQuery<noticeQuery>>({
  ...queryObj,
});

export const resetNoticeQuery = () => {
  noticeQuery.value = {
    ...queryObj,
  };
};
