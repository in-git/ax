import type { SystemPost } from '@/api/modules/system/post/types';
import type { Role } from '@/api/modules/system/role/types';
import type { UserProfileData } from '@/api/modules/system/user/types';

export const userMode = ref<'table' | 'form'>('table');
export const userForm = ref<UserProfileData>({
  createBy: '',
  createTime: '',
  remark: '',
  userId: '',
  deptId: 0,
  userName: '',
  nickName: '',
  email: '',
  phonenumber: '',
  sex: '',
  avatar: '',
  password: '',
  status: '',
  delFlag: '',
  loginIp: '',
  loginDate: '',
  roles: [],
  admin: false,
  roleId: [],
  postIds: [],
  roleIds: [],
});
export const userRoles = ref<Role[]>([]);
export const userPosts = ref<SystemPost[]>([]);
