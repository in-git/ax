import type { UserProfileData } from '@/api/modules/system/user/types';
import { profile } from '@/api/modules/system/user/user';
import useUserStore from '@/store/user';

export const userProfile = ref<UserProfileData>();

export const getProfile = async () => {
  const userStore = useUserStore();
  const { data } = await profile();
  userProfile.value = data.data;
  userStore.$state.userInfo = data.data;
  return data.data;
};
