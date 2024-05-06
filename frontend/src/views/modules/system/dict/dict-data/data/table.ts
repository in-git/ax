import type { IQuery, TableConfig } from '@/api/config/types';
import { DeleteOutlined } from '@ant-design/icons-vue';
import type { ItemType } from 'ant-design-vue';
import { dictDataDelete } from './curd';

export const dictDataTable = ref<TableConfig>({
  rowKey: 'dictCode',
  data: [],
  loading: false,
  moduleName: 'dict',
});

interface dictDataQuery {
  dictType: string;
}

export const dictDataQuery = ref<IQuery<dictDataQuery>>({
  pageNum: 1,
  pageSize: 10,
  total: 0,
  dictType: '',
});

export const dictDataKeys = ref<number[]>([]);

export const dictDataOperationList: ItemType[] = [
  {
    label: '删除',
    key: 'delete',
    icon: h(DeleteOutlined),
    onClick() {
      dictDataDelete();
    },
  },
];
