import { windowList } from '@/global/config/window';
import useUserStore from '@/store/user';
import { logout } from './user';

export const userLogout = () => {
  const userStore = useUserStore();
  userStore.$state.token = '';
  windowList.value = [];
  logout();
};
