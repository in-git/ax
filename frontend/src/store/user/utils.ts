import useUserStore from '.';

export const getToken = () => {
  const userStore = useUserStore();
  return userStore.$state.token;
};
