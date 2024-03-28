import type { IQuery, TableConfig } from '@/api/config/types';
import { postList } from '@/api/modules/system/post/post';
import { postColumns } from './columns';

export const postTable = ref<TableConfig>({
  rowKey: 'postId',
  columns: postColumns,
  data: [],
  list: postList,
  loading: false,
});

export const postQuery = ref<IQuery>({
  total: 0,
  pageSize: 20,
  pageNum: 1,
});

export const postKeys = ref<number[]>([]);
