import { windowList } from '@/global/config/window';
import useUserStore from '@/store/user';
import { logout } from '../modules/system/user/user';

export const logoff = async () => {
  await logout();
  const store = useUserStore();
  store.$state.token = '';
  windowList.value = [];
};
