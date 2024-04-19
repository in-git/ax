import logoPng from '@/assets/logo.png';
import { userProfile } from '@/views/desktop/toolbar/profile/data';
import { getHost } from '../system/utils';

export const getAvatar = (): string => {
  if (userProfile.value) {
    return getHost().slice(0, -1) + userProfile.value.avatar;
  }
  return logoPng;
};
