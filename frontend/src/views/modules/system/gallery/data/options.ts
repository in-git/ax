// 这里是静态下拉框的数据
import { getOptionsByName } from '@/api/modules/system/dict/dict.data';
import { dictDataToOptions } from '@/utils/table/table';

export const galleryTypeOptions = ref();

export const galleryTypeOptionsFetch = async () => {
  const { data } = await getOptionsByName('sys_gallery');
  if (data.data) {
    galleryTypeOptions.value = dictDataToOptions(data.data);
  }
};
