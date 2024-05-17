import { getOptionsByName } from '@/api/modules/system/dict/dict';
import { dictDataToOptions } from '@/utils/table/table';
// 从系统字典中获取字段数据
export const noticeTypeOptions = ref();

export const noticeTypeOptionsFetch = async () => {
  const { data } = await getOptionsByName('sys_notice_type');
  if (data.data) {
    noticeTypeOptions.value = dictDataToOptions(data.data);
  }
};
export const statusOptions = ref();

export const statusOptionsFetch = async () => {
  const { data } = await getOptionsByName('sys_notice_status');
  if (data.data) {
    statusOptions.value = dictDataToOptions(data.data);
  }
};
