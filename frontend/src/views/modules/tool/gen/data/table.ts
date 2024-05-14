import type { IQuery, TableConfig } from '@/api/config/types';

export const codeTable = ref<TableConfig>({
  rowKey: 'tableName',
  data: [],
  loading: false,
  moduleName: 'code',
});

interface codeQuery {
  functionName: string;
}

export const codeQuery = ref<IQuery<codeQuery>>({
  pageNum: 1,
  pageSize: 10,
  total: 0,
  orderByColumn: 'create_time',
  isAsc: 'desc',
  functionName: '',
});
export const codeKeys = ref<string[]>([]);
