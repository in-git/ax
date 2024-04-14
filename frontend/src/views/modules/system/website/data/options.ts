import { getOptionsByName } from '@/api/modules/system/dict/dict.data';
import { dictDataToOptions } from '@/utils/table/table';

export const typeOptions = ref();

export const typeOptionsFetch = async () => {
  const { data } = await getOptionsByName('website_type');
  if (data.data) {
    typeOptions.value = dictDataToOptions(data.data);
  }
};
