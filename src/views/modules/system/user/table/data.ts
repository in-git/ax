import type { IQuery } from '@/api/config/types';
import type { UserProfileData } from '@/api/modules/system/user/types';
import { userList } from '@/api/modules/system/user/user';

interface UserConfig {
  data: UserProfileData[];
  loading: boolean;
  selectedKeys: number[];
}
interface UserQuery {
  userName: string;
  phonenumber: string;
}

export const userConfig = ref<UserConfig>({
  data: [],
  loading: false,
  selectedKeys: [],
});

export const userQuery = ref<IQuery<UserQuery>>({
  pageNum: 1,
  pageSize: 20,
  total: 0,
  status: '',
  userName: '',
  phonenumber: '',
});

export const loadUserData = async () => {
  userConfig.value.loading = true;
  const { data } = await userList(userQuery.value);
  userConfig.value.data = data.rows;
  userQuery.value.total = data.total;
  userConfig.value.loading = false;
};
