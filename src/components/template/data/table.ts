import type { IQuery, TableConfig } from '@/api/config/types';
import { DeleteOutlined } from '@ant-design/icons-vue';
import type { ItemType } from 'ant-design-vue';

export const __table = ref<TableConfig>({
  rowKey: 'noticeId',
  data: [],
  loading: false,
  list: undefined as any,
});

export const __query = ref<IQuery>({
  pageNum: 1,
  pageSize: 10,
  total: 0,
});
export const __keys = ref<number[]>([]);

export const __operationList: ItemType[] = [
  {
    label: '删除',
    key: 'delete',
    icon: h(DeleteOutlined),
  },
];
