import { windowList } from '@/global/window/window';
import useSystemStore from '@/store/system';
import useUserStore from '@/store/user';
import { logout } from './user';

export const userLogout = async () => {
  const userStore = useUserStore();
  const systemStore = useSystemStore();
  userStore.$state.token = '';
  userStore.$state.userInfo = undefined;
  windowList.value = [];
  systemStore.$state.readMessages = [];
  await logout();
};
