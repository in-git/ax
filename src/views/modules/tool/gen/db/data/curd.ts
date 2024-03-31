import { fetchGenDbList, importDbByDbs } from '@/api/modules/tool/gen/gen';
import { response } from '@/utils/table/table';
import { codeList } from '../../data/curd';
import { showDbForm } from '../../data/form';
import { dbKeys, dbQuery, dbTable } from './table';

export const dbList = async () => {
  dbTable.value.loading = true;
  /* GET LIST */
  const { data } = await fetchGenDbList(dbQuery.value);
  dbTable.value.data = data.rows;
  dbQuery.value.total = data.total;
  dbTable.value.loading = false;
};

export const importDb = async (db?: string) => {
  let list = db ? [db] : dbKeys.value;
  await response(importDbByDbs, list);
  await codeList();
  showDbForm.value = false;
};
