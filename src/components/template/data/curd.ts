import { listDict } from '@/api/modules/system/dict/dict';
import { dictShowForm } from './form';
import { dictKeys, dictQuery, dictTable } from './table';

export const dictList = async () => {
  dictTable.value.loading = true;
  /* GET LIST */
  const { data } = await listDict(dictQuery.value);
  dictTable.value.data = data.rows;
  dictQuery.value.total = data.total;
  dictTable.value.loading = false;
};

export const dictEdit = async (id: number) => {
  dictShowForm.value = true;
};
export const dictDelete = async (id?: number) => {
  let ids = id ? [id] : dictKeys.value;
  /* Delete ids */
};
export const dictUpdate = async (id: number) => {};
export const dictMenus = [
  {
    label: '',
  },
];
