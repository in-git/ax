import type { IQuery, TableConfig } from '@/api/config/types';
import { DeleteOutlined } from '@ant-design/icons-vue';
import type { ItemType } from 'ant-design-vue';

export const dbTable = ref<TableConfig>({
  rowKey: 'tableName',
  data: [],
  loading: false,
  moduleName: 'db',
});
interface dbQuery {
  tableName: string;
}
export const dbQuery = ref<IQuery<dbQuery>>({
  pageNum: 1,
  pageSize: 10,
  total: 0,
  tableName: '',
});
export const dbKeys = ref<string[]>([]);

export const dbOperationList: ItemType[] = [
  {
    label: '删除',
    key: 'delete',
    icon: h(DeleteOutlined),
  },
];
