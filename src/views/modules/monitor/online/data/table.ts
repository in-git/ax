import type { IQuery, TableConfig } from '@/api/config/types';
import { DeleteOutlined } from '@ant-design/icons-vue';
import type { ItemType } from 'ant-design-vue';

export const onlineTable = ref<TableConfig>({
  rowKey: 'tokenId',
  data: [],
  loading: false,
});

interface onlineQuery {
  ipaddr: string;
  userName: string;
}

export const onlineQuery = ref<IQuery<onlineQuery>>({
  pageNum: 1,
  pageSize: 10,
  total: 0,
  ipaddr: '',
  userName: '',
});
export const onlineKeys = ref<number[]>([]);

export const onlineOperationList: ItemType[] = [
  {
    label: '删除',
    key: 'delete',
    icon: h(DeleteOutlined),
  },
];
