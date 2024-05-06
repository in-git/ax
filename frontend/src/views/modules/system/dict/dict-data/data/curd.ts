import { deleteDictData, dictDataList, selectDictData } from '@/api/modules/system/dict/dict.data';
import { response } from '@/utils/table/table';
import { dictForm } from '../../data/form';
import { dictDataForm, dictDataShowForm, resetDictDataForm } from './form';
import { dictDataKeys, dictDataQuery, dictDataTable } from './table';

export const listDictData = async () => {
  dictDataTable.value.loading = true;
  dictDataQuery.value.dictType = dictForm.value.dictType;
  const { data } = await dictDataList(dictDataQuery.value);
  dictDataTable.value.data = data.rows;
  dictDataQuery.value.total = data.total;
  dictDataTable.value.loading = false;
};

export const dictDataEdit = async (id?: number) => {
  let targetId = id ? id : dictDataKeys.value[0];
  const { data } = await selectDictData(targetId);
  if (data.data) {
    dictDataForm.value = data.data;
    dictDataShowForm.value = true;
  }
};

export const dictDataDelete = async (id?: number) => {
  let ids = id ? [id] : dictDataKeys.value;
  await response(deleteDictData, ids);
  listDictData();
  /* Delete ids */
};

export const createDictData = () => {
  resetDictDataForm();
  dictDataShowForm.value = true;
};
