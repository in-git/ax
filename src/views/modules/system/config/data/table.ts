import type { IQuery, TableConfig } from '@/api/config/types';
import { listConfig } from '@/api/modules/system/config/config';
import { DeleteOutlined } from '@ant-design/icons-vue';
import type { ItemType } from 'ant-design-vue';

export const configTable = ref<TableConfig>({
  rowKey: 'configId',
  data: [],
  loading: false,
  list: listConfig,
});

export const configQuery = ref<IQuery>({
  pageNum: 1,
  pageSize: 10,
  total: 0,
});
export const configKeys = ref<number[]>([]);

export const configOperationList: ItemType[] = [
  {
    label: '删除',
    key: 'delete',
    icon: h(DeleteOutlined),
  },
];
