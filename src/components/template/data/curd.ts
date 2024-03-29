import { __ShowForm } from './form';
import { __Keys, __Query, __Table } from './table';

export const __List = async () => {
  __Table.value.loading = true;
  /* GET LIST */
  let test: any = () => {};
  const { data } = await test(__Query.value);
  __Table.value.data = data.rows;
  __Query.value.total = data.total;
  __Table.value.loading = false;
};

export const __Edit = async (id: number) => {
  __ShowForm.value = true;
};
export const __Delete = async (id?: number) => {
  let ids = id ? [id] : __Keys.value;
  /* Delete ids */
};
export const __Update = async (id: number) => {};
export const __Menus = [
  {
    label: '',
  },
];
