import { __showForm } from './form';
import { __keys, __table } from './table';

export const __list = async () => {
  __table.value.loading = true;
  /* GET LIST */
  __table.value.loading = false;
};

export const __edit = async (id: number) => {
  __showForm.value = true;
};
export const __delete = async (id?: number) => {
  let ids = id ? [id] : __keys.value;
  /* Delete ids */
};
export const __update = async (id: number) => {};
export const __menus = [
  {
    label: '',
  },
];
