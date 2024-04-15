import type { IQuery, TableConfig } from '@/api/config/types';
import { DeleteOutlined } from '@ant-design/icons-vue';
import type { ItemType } from 'ant-design-vue';
import { dictDelete } from './curd';

export const dictTable = ref<TableConfig>({
  rowKey: 'dictId',
  data: [],
  loading: false,
  moduleName: 'dict',
});

interface DictQuery {
  dictName: string;
}

export const dictQuery = ref<IQuery<DictQuery>>({
  pageNum: 1,
  pageSize: 15,
  total: 0,
  dictName: '',
});
export const dictKeys = ref<number[]>([]);

export const dictOperationList: ItemType[] = [
  {
    label: '删除',
    key: 'delete',
    icon: h(DeleteOutlined),
    onClick() {
      dictDelete();
    },
  },
];
