import type { IQuery, TableConfig } from '@/api/config/types';
import { DeleteOutlined } from '@ant-design/icons-vue';
import type { ItemType } from 'ant-design-vue';

export const deptTable = ref<TableConfig>({
  rowKey: 'deptId',
  data: [],
  loading: false,
  moduleName: 'dept',
});
interface deptQuery {}
export const deptQuery = ref<IQuery<deptQuery>>({
  pageNum: 1,
  pageSize: 10,
  total: 0,
});
export const deptKeys = ref<number[]>([]);

export const deptOperationList: ItemType[] = [
  {
    label: '删除',
    key: 'delete',
    icon: h(DeleteOutlined),
  },
];
