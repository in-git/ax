import { memoResetForm, memoShowForm,memoForm } from './form';
import { memoKeys, memoQuery, memoTable } from './table';
import {
  deleteMemo,
  fetchMemoById ,
  fetchMemoList,
  exportMemo
} from '@/api/modules/system/memo/memo';
import { response } from '@/utils/table/table';

export const memoList = async () => {
  memoTable.value.loading = true;
  const { data } = await fetchMemoList(memoQuery.value);
  memoTable.value.data = data.rows;
  memoQuery.value.total = data.total;
  memoTable.value.loading = false;
};

export const memoEdit = async (id?: number) => {
    let targetId: number = id ? id : memoKeys.value[0];
    memoTable.value.loading = true;
    const { data } = await fetchMemoById(targetId);
    if (data.data) {
        memoForm.value = data.data;
        memoShowForm.value = true;
    }
    memoTable.value.loading = false;
};

export const memoCreate = async () => {
  memoResetForm();
  memoShowForm.value = true;
};

export const memoDelete = async (id?: number) => {
  let ids = id ? [id] : memoKeys.value;
  await response(deleteMemo, ids);
  await memoList();
   memoKeys.value=[]
};

export const memoExport = () => {
  return exportMemo({
    pageNum: memoQuery.value.pageNum,
    pageSize: memoQuery.value.pageSize,
  });
};
