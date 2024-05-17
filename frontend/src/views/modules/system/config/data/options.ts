// 这里是静态下拉框的数据
import { getOptionsByName } from '@/api/modules/system/dict/dict';
import { dictDataToOptions } from '@/utils/table/table';

export const configTypeOptions = ref();

export const configTypeOptionsFetch = async () => {
  const { data } = await getOptionsByName('sys_yes_no');
  if (data.data) {
    configTypeOptions.value = dictDataToOptions(data.data);
  }
};
