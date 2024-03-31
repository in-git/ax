import type { IQuery, TableConfig } from '@/api/config/types';
import { DeleteOutlined } from '@ant-design/icons-vue';
import type { ItemType } from 'ant-design-vue';

export const __Table = ref<TableConfig>({
  rowKey: '',
  data: [],
  loading: false,
  moduleName: '',
});
interface __Query {}
export const __Query = ref<IQuery<__Query>>({
  pageNum: 1,
  pageSize: 10,
  total: 0,
});
export const __Keys = ref<number[]>([]);

export const __OperationList: ItemType[] = [
  {
    label: '删除',
    key: 'delete',
    icon: h(DeleteOutlined),
  },
];
