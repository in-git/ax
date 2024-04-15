import type { IQuery, TableConfig } from '@/api/config/types';
import type { SystemNotice } from '@/api/modules/system/notice/types';
import { DeleteOutlined } from '@ant-design/icons-vue';
import type { ItemType } from 'ant-design-vue';
import { noticeDelete, noticeList } from './curd';

export const noticeTable = ref<TableConfig<SystemNotice>>({
  //这里根据实际情况修改
  //作用：勾选的唯一标识
  rowKey: 'noticeId',
  data: [],
  loading: false,
  moduleName: 'notice',
});
//查询参数接口
interface noticeQuery {
  noticeTitle: string;
  noticeType: string;
}
// 预览模式:卡片|表格
export const viewMode = ref<'card' | 'table'>('table');

//查询参数
export const noticeQuery = ref<IQuery<noticeQuery>>({
  pageNum: 1,
  pageSize: 10,
  total: 0,
  noticeTitle: '',
  noticeType: '',
});

//已选中的元素数组
export const noticeKeys = ref<number[]>([]);

//操作的下拉菜单
export const noticeOperationList: ItemType[] = [
  {
    label: '删除',
    key: 'delete',
    icon: h(DeleteOutlined),
    async onClick() {
      await noticeDelete();
      noticeList();
    },
  },
];
