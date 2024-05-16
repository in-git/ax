import { getOptionsByName } from '@/api/modules/system/dict/dict';
import { dictDataToOptions } from '@/utils/table/table';

type KV = {
  label: string;
  value: string | number;
  [key: string]: string | number;
};

type DictCache = {
  [key in string]: KV[];
};

/**
 * @description: 主键缓存
 */
let dictCache: DictCache = {};

/**
 * @description:
 *    1.根据字典名称获取下拉菜单数据
 *    2.如果请求过，则缓存
 *    3.刷新页面失效
 * @param {string} dictName 字典名
 */
export const getDictOption = async (dictName: string) => {
  if (!dictCache[dictName]) {
    const { data } = await getOptionsByName(dictName);
    if (!data.data) return;
    dictCache[dictName] = dictDataToOptions(data.data);
  }
  return dictCache[dictName];
};
/**
 * @description: 强制清空字典缓存
 */
export const clearDictCache = () => {
  dictCache = {};
};
