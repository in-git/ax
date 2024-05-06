import { fetchOnlineList } from '@/api/modules/monitor/online/online';
import { onlineShowForm, resetOnlineForm } from './form';
import { onlineKeys, onlineQuery, onlineTable } from './table';

export const onlineList = async () => {
  onlineTable.value.loading = true;
  /* GET LIST */
  const { data } = await fetchOnlineList(onlineQuery.value);
  onlineTable.value.data = data.rows;
  onlineQuery.value.total = data.total;
  onlineTable.value.loading = false;
};

export const onlineEdit = async (id?: number) => {
  onlineShowForm.value = true;
};

export const onlineCreate = async () => {
  resetOnlineForm();
  onlineShowForm.value = true;
};
export const onlineDelete = async (id?: number) => {
  let ids = id ? [id] : onlineKeys.value;
  /* Delete ids */
};
