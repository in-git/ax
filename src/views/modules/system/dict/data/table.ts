import type { IQuery, TableConfig } from '@/api/config/types';
import { DeleteOutlined } from '@ant-design/icons-vue';
import type { ItemType } from 'ant-design-vue';

export const dictTable = ref<TableConfig>({
  rowKey: 'dictId',
  data: [],
  loading: false,
});

interface DictQuery {
  dictName: string;
}
export const dictQuery = ref<IQuery<DictQuery>>({
  pageNum: 1,
  pageSize: 5,
  total: 0,
  dictName: '',
});
export const dictKeys = ref<number[]>([]);

export const dictOperationList: ItemType[] = [
  {
    label: '删除',
    key: 'delete',
    icon: h(DeleteOutlined),
  },
];
