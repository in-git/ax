import { getDictOption } from '@/global/data/dict';

export const statusOptions = ref();

export const fetchStatusOptions = async () => {
  statusOptions.value = await getDictOption('sys_common_status');
};
export {};
