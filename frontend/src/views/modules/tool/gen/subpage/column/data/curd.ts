import { fetchCodeById } from '@/api/modules/tool/gen/gen';
import { codeFormData } from './data';

/**
 * @description: 获取表单信息
 * @param {number} code
 */
export const getTableInfo = async (code: number) => {
  const { data } = await fetchCodeById(code);
  if (data.data) {
    codeFormData.value = data.data;
  }
};
