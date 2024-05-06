import type { IQuery } from '@/api/config/types';
import type { UserProfileData } from '@/api/modules/system/user/types';

interface UserConfig {
  data: UserProfileData[];
  loading: boolean;
  selectedKeys: number[];
}
interface UserQuery {
  userName: string;
  phonenumber: string;
  deptId: number | undefined;
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
  status: '0',
  userName: '',
  phonenumber: '',
  deptId: undefined,
});
