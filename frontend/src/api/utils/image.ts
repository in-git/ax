import { resourceUrl } from './host';

/* 根据类型获取系统图标 */
export const getStaticImage = (path: string) => {
  return `${resourceUrl}/${path}`;
};

export const getFavicon = (src: string) => {
  return `https://www.favicon.vip/get.php?url=${src}`;
};
