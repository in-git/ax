import type { IQuery, TableConfig } from '@/api/config/types';
import { DeleteOutlined } from '@ant-design/icons-vue';
import type { ItemType } from 'ant-design-vue';

export const codeTable = ref<TableConfig>({
  rowKey: '',
  data: [],
  loading: false,
});
interface codeQuery {}
export const codeQuery = ref<IQuery<codeQuery>>({
  pageNum: 1,
  pageSize: 10,
  total: 0,
});
export const codeKeys = ref<number[]>([]);

export const codeOperationList: ItemType[] = [
  {
    label: '删除',
    key: 'delete',
    icon: h(DeleteOutlined),
  },
];
