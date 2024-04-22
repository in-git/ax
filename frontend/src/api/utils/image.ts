import { resourceUrl } from './host';

/* 根据类型获取系统图标 */
export const getSysImage = (path: string) => {
  return `${resourceUrl}/${path}`;
};
