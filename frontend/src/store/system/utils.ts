import useSystemStore from '.';

export const getHost = (path: string = '') => {
  const systemStore = useSystemStore();
  return systemStore.$state.developer.baseURL + path;
};
/* 获取静态资源目录 */
export const getStaticHost = (path: string) => {
  return getHost(`profile/${path}`);
};
