import { deleteCodeByIds, fetchCodeById, fetchCodeList } from '@/api/modules/tool/gen/gen';
import { response } from '@/utils/table/table';
import { codeFormData, codeShowForm, currentCode } from './form';
import { codeKeys, codeQuery, codeTable } from './table';

export const codeList = async () => {
  codeTable.value.loading = true;
  /* GET LIST */
  const { data } = await fetchCodeList(codeQuery.value);
  codeTable.value.data = data.rows;
  codeQuery.value.total = data.total;
  codeTable.value.loading = false;
};

export const editCode = async (id?: number) => {
  codeTable.value.loading = true;
  let targetId = id ? id : codeKeys.value[0];
  const { data } = await fetchCodeById(targetId);
  if (data.data) codeFormData.value = data.data;
  codeTable.value.loading = false;
  codeShowForm.value = true;
};
export const codeDelete = async () => {
  await response(deleteCodeByIds, currentCode.value?.tableId);
  codeList();
};
export const createCode = () => {
  codeShowForm.value = true;
};
