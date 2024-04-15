import { windowList } from '@/global/config/window';
import useUserStore from '@/store/user';
import { logout } from './user';

export const userLogout = async () => {
  const userStore = useUserStore();
  userStore.$state.token = '';
  userStore.$state.userInfo = undefined;
  windowList.value = [];
  await logout();
};
