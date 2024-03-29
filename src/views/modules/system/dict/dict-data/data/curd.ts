import { dictDataList } from '@/api/modules/system/dict/dict.data';
import { dictForm } from '../../data/form';
import { dicDataShowForm } from './form';
import { dicDataKeys, dicDataQuery, dicDataTable } from './table';

export const dicDataList = async () => {
  dicDataTable.value.loading = true;
  dicDataQuery.value.dictType = dictForm.value.dictType;
  const { data } = await dictDataList(dicDataQuery.value);
  dicDataTable.value.data = data.rows;
  dicDataQuery.value.total = data.total;
  dicDataTable.value.loading = false;
};

export const dicDataEdit = async (id?: number) => {
  let targetId = id ? id : dicDataKeys.value;
  dicDataShowForm.value = true;
};
export const dicDataDelete = async (id?: number) => {
  let ids = id ? [id] : dicDataKeys.value;
  /* Delete ids */
};
export const dicDataUpdate = async (id: number) => {};
