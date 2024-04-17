import type { IQuery, TableConfig } from '@/api/config/types';
import type { SystemMemo } from '@/api/modules/system/memo/types';
import { DeleteOutlined } from '@ant-design/icons-vue';
import type { ItemType } from 'ant-design-vue';
import { memoDelete, memoList } from './curd';

export const memoTable = ref<TableConfig<SystemMemo>>({
  //这里根据实际情况修改
  //作用：勾选的唯一标识
  rowKey: 'memoId',
  data: [],
  loading: false,
  moduleName: 'memo',
});
//查询参数接口
interface memoQuery {
  title: '';
  value: '';
  description: '';
  type: '1' | '2';
}
// 预览模式:卡片|表格
export const viewMode = ref<'card' | 'table'>('table');

//查询参数
export const memoQuery = ref<IQuery<memoQuery>>({
  pageNum: 1,
  pageSize: 10,
  total: 0,
  title: '',
  value: '',
  description: '',
  type: '1',
});

//已选中的元素数组
export const memoKeys = ref<number[]>([]);

//操作的下拉菜单
export const memoOperationList: ItemType[] = [
  {
    label: '删除',
    key: 'delete',
    icon: h(DeleteOutlined),
    async onClick() {
      await memoDelete();
      memoList();
    },
  },
];
