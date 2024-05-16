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
const dictCache: DictCache = {};

/**
 * @description:
 *    根据字典名称获取下拉菜单数据
 *    如果请求过，则缓存
 *    刷新页面失效
 * @param {string} dictName 字典名
 */
export const getDictOption = async (dictName: string) => {
  const { data } = await getOptionsByName(dictName);
  if (!data.data) return;
  if (dictCache[dictName]) {
    dictCache[dictName] = dictDataToOptions(data.data);
  }
  return dictCache[dictName];
};
