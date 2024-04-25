import { resourceUrl } from './host';

/* 根据类型获取系统图标 */
export const getSysImage = (path: string) => {
  return `${resourceUrl}/${path}`;
};
export const getFavicon = (src: string) => {
  return `https://favicon.qqsuu.cn/${src}`;
};
