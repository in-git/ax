import useUserStore from '.';

export const getToken = (): string | null => {
  return useUserStore().$state.token;
};
