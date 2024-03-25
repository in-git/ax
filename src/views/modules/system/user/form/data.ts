import type { SystemPost } from '@/api/modules/system/post/types';
import type { Role } from '@/api/modules/system/role/types';
import type { UserProfileData } from '@/api/modules/system/user/types';
import { editUserConfig } from '../table/curd';

export const userMode = ref<'table' | 'form'>('table');

let userFormObj: UserProfileData = {
  createBy: '',
  createTime: '',
  remark: '',
  userId: '',
  deptId: 0,
  userName: '',
  nickName: '',
  email: '',
  phonenumber: '',
  sex: '0',
  avatar: '',
  password: '',
  status: '0',
  delFlag: '',
  loginIp: '',
  loginDate: '',
  roles: [],
  admin: false,
  roleId: [],
  postIds: [],
  roleIds: [],
};
export const userForm = ref<UserProfileData>({
  ...userFormObj,
});
export const userRoles = ref<Role[]>([]);
export const userPosts = ref<SystemPost[]>([]);

export const resetUserForm = async () => {
  userForm.value = {
    ...userFormObj,
  };
  await editUserConfig();
  console.log(userRoles.value);
};
