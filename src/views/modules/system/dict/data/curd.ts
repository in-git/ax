import { showDictFormForm } from './form';
import { dictKeys, dictTable } from './table';

export const __list = async () => {
  dictTable.value.loading = true;
  /* GET LIST */
  dictTable.value.loading = false;
};

export const __edit = async (id: number) => {
  showDictFormForm.value = true;
};
export const __delete = async (id?: number) => {
  let ids = id ? [id] : dictKeys.value;
  /* Delete ids */
};
export const __update = async (id: number) => {};
export const __menus = [
  {
    label: '',
  },
];
