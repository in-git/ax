import useSystemStore from '.';
/* 外部资源链接 */
export const resourceUrl = `http://in-git.gitee.io/ax-resource`;

/* 获取当前后台的根目录 */
export const getHost = (path: string = '') => {
  const systemStore = useSystemStore();
  return systemStore.$state.developer.baseURL + path;
};

/* 获取静态资源目录 */
export const getStaticHost = (path: string) => {
  return getHost(`profile/${path}`);
};
