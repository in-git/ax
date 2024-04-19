import useSystemStore from '.';

export const getHost = (path: string = '') => {
  const systemStore = useSystemStore();
  return systemStore.$state.developer.baseURL + path;
};
export const getStaticHost = (path: string) => {
  const systemStore = useSystemStore();
  return systemStore.$state.developer.baseURL + 'profile/' + path;
};
