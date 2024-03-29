import { deleteDict, listDict, selectDict } from '@/api/modules/system/dict/dict';
import { response } from '@/utils/table/table';
import { dictForm, editDictConfig, showDictForm } from './form';
import { dictKeys, dictQuery, dictTable } from './table';

export const dictList = async () => {
  dictTable.value.loading = true;
  const { data } = await listDict(dictQuery.value);
  dictTable.value.data = data.rows;
  dictQuery.value.total = data.total;
  dictTable.value.loading = false;
};

export const dictEdit = async (id?: number) => {
  let targetId = id ? id : dictKeys.value[0];
  const { data } = await selectDict(targetId);
  if (data.data) {
    dictForm.value = data.data;
    showDictForm.value = true;
  }
};

export const dictDelete = async (id?: number) => {
  let ids = id ? [id] : dictKeys.value;
  await response(deleteDict, ids);
  dictList();
};

export const selectDictConfig = (dictType: string) => {
  editDictConfig.value = !editDictConfig.value;
  dictForm.value.dictType = dictType;
};
