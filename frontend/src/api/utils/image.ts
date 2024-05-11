import type { SystemStore } from '@/store/system/types';

/* 获取静态资源目录 */
export const getStaticImage = (path: string): string => {
  if (!path) {
    return '';
  }
  const systemStore = localStorage.getItem('system');
  if (!systemStore) return `http://150.158.14.110:8002/images${path}`;
  const { developer } = JSON.parse(systemStore) as SystemStore;
  if (!developer) return '';
  const resourceUrl = developer.resourceHost;
  return `${resourceUrl}/${path}`;
};

export const getFavicon = (src: string) => {
  return `https://www.favicon.vip/get.php?url=${src}`;
};
