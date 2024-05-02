import type { UserProfileData } from '@/api/modules/system/user/types';

export interface UserHistory {
  username: string;
  password: string;
  id: string;
}
export interface UserState {
  name?: string;
  token: string;
  history: UserHistory[];
  userInfo: UserProfileData | undefined;
}
