import type { IQuery, TableConfig } from '@/api/config/types';
import { DeleteOutlined } from '@ant-design/icons-vue';
import type { ItemType } from 'ant-design-vue';

export const dicDataTable = ref<TableConfig>({
  rowKey: '',
  data: [],
  loading: false,
  list: undefined as any,
});
interface dicDataQuery {
  dictType: string;
}
export const dicDataQuery = ref<IQuery<dicDataQuery>>({
  pageNum: 1,
  pageSize: 10,
  total: 0,
  dictType: '',
});
export const dicDataKeys = ref<number[]>([]);

export const dicDataOperationList: ItemType[] = [
  {
    label: '删除',
    key: 'delete',
    icon: h(DeleteOutlined),
  },
];
