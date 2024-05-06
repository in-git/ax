import type { IQuery, TableConfig } from '@/api/config/types';
import type { SystemFeedback } from '@/api/modules/system/feedback/types';
import { DeleteOutlined } from '@ant-design/icons-vue';
import type { ItemType } from 'ant-design-vue';
import { feedbackDelete, feedbackList } from './curd';

export const feedbackTable = ref<TableConfig<SystemFeedback>>({
  //这里根据实际情况修改
  //作用：勾选的唯一标识
  rowKey: 'feedbackId',
  data: [],
  loading: false,
  moduleName: 'feedback',
});
//查询参数接口
interface feedbackQuery {
  feedbackContent: '';
  nickname: '';
}
// 预览模式:卡片|表格
export const viewMode = ref<'card' | 'table'>('table');

//查询参数
export const feedbackQuery = ref<IQuery<feedbackQuery>>({
  pageNum: 1,
  pageSize: 10,
  total: 0,
  feedbackContent: '',
  nickname: '',
});

// 已选中的元素数组
export const feedbackKeys = ref<number[]>([]);

// 表格操作的下拉菜单
export const feedbackOperationList: ItemType[] = [
  {
    label: '删除',
    key: 'delete',
    icon: h(DeleteOutlined),
    async onClick() {
      await feedbackDelete();
      feedbackList();
    },
  },
];
