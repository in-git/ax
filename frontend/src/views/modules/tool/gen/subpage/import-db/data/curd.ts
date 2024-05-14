import { fetchGenDbList, importDbByDbs } from '@/api/modules/tool/gen/gen';
import { response } from '@/utils/table/table';
import { dbKeys, dbQuery, dbTable } from './table';

/**
 * @description: 获取未导入的数据库列表
 */
export const dbList = async () => {
  dbTable.value.loading = true;
  const { data } = await fetchGenDbList(dbQuery.value);
  dbTable.value.data = data.rows;
  dbQuery.value.total = data.total;
  dbTable.value.loading = false;
};

/**
 * @description: 导入的数据库
 * @param {string} tableName 表名
 */
export const importDb = async (tableName?: string) => {
  let list = tableName ? [tableName] : dbKeys.value;
  await response(importDbByDbs, list);
  dbList();
};
