import type { IQuery, TableConfig } from '@/api/config/types';
import { DeleteOutlined } from '@ant-design/icons-vue';
import type { ItemType } from 'ant-design-vue';

export const dictTable = ref<TableConfig>({
  rowKey: '',
  data: [],
  loading: false,
  list: undefined as any,
});

export const dictQuery = ref<IQuery>({
  pageNum: 1,
  pageSize: 10,
  total: 0,
});
export const dictKeys = ref<number[]>([]);

export const dictOperationList: ItemType[] = [
  {
    label: '删除',
    key: 'delete',
    icon: h(DeleteOutlined),
  },
];
