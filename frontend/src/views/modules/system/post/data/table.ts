import type { IQuery, TableConfig } from '@/api/config/types';

export const postTable = ref<TableConfig>({
  rowKey: 'postId',
  data: [],
  loading: false,
  moduleName: 'post',
});

export const postQuery = ref<IQuery>({
  total: 0,
  pageSize: 20,
  pageNum: 1,
});

export const postKeys = ref<number[]>([]);
