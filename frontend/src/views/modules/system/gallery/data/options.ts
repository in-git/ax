// 这里是静态下拉框的数据
import { getOptionsByName } from '@/api/modules/system/dict/dict.data';
import useSystemStore from '@/store/system';
import { dictDataToOptions } from '@/utils/table/table';

const dev = useSystemStore();

export const galleryTypeOptions = ref();

export const galleryTypeOptionsFetch = async () => {
  const { data } = await getOptionsByName('sys_gallery');
  if (data.data) {
    galleryTypeOptions.value = dictDataToOptions(data.data);
  }
};

export const storageOptions = [
  {
    label: '本地',
    value: 'local',
    action: `${dev.$state.developer.baseURL}common/upload`,
  },
  {
    label: '云存储',
    value: 'oss',
    action: `${dev.$state.developer.baseURL}common/upload-oss`,
  },
];
