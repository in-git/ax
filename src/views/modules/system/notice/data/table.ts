import type { IQuery, TableConfig } from '@/api/config/types';
import { DeleteOutlined } from '@ant-design/icons-vue';
import type { ItemType } from 'ant-design-vue';

export const noticeTable = ref<TableConfig>({
  rowKey: 'noticeId',
  data: [],
  loading: false,
});
export const noticeQuery = ref<IQuery>({
  pageNum: 1,
  pageSize: 10,
  total: 0,
});
export const noticeKeys = ref<number[]>([]);

export const operationList: ItemType[] = [
  {
    label: '删除',
    key: 'delete',
    icon: h(DeleteOutlined),
  },
];
