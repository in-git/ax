import { fetchGenList } from '@/api/modules/tool/gen/gen';
import { codeShowForm } from './form';
import { codeKeys, codeQuery, codeTable } from './table';

export const codeList = async () => {
  codeTable.value.loading = true;
  /* GET LIST */
  const { data } = await fetchGenList(codeQuery.value);
  codeTable.value.data = data.rows;
  codeQuery.value.total = data.total;
  codeTable.value.loading = false;
};

export const codeEdit = async (id?: number) => {
  let targetId = id ? id : codeKeys.value;
  codeShowForm.value = true;
};
export const codeDelete = async (id?: number) => {
  let ids = id ? [id] : codeKeys.value;
  /* Delete ids */
};
export const codeUpdate = async (id: number) => {};
