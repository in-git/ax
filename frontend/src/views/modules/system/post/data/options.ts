// 这里是静态下拉框的数据
import { getOptionsByName } from '@/api/modules/system/dict/dict.data';
import { dictDataToOptions } from '@/utils/table/table';

export const statusOptions = ref()

export const statusOptionsFetch = async () => {
  const { data } = await getOptionsByName('sys_common_status');
  if (data.data) {
    statusOptions.value = dictDataToOptions(data.data);
  }
};
