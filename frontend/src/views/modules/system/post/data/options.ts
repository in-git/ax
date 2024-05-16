import { getOptionsByName } from '@/api/modules/system/dict/dict';
import { dictDataToOptions } from '@/utils/table/table';

export const statusOptions = ref()

export const statusOptionsFetch = async () => {
  const { data } = await getOptionsByName('sys_common_status');
  if (data.data) {
    statusOptions.value = dictDataToOptions(data.data);
  }
};

export {}