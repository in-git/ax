import logoPng from '@/assets/logo.png';
import { userProfile } from '@/views/desktop/toolbar/profile/data';
import usePageStore from '../page';
export const getAvatar = (): string => {
  if (userProfile.value) {
    const page = usePageStore();
    const baseURL = page.$state.developer.baseURL;
    return baseURL.slice(0, -1) + userProfile.value.avatar;
  }
  return logoPng;
};
