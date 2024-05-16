import type { SystemPost } from '@/api/modules/system/post/types';
import type { SystemRole } from '@/api/modules/system/role/types';
import type { UserInfoData, UserProfileData } from '@/api/modules/system/user/types';
import type { Rule } from 'ant-design-vue/es/form/interface';

export const userShowForm = ref(false);

export const userWithAuthForm = ref<UserInfoData>();
const form: UserProfileData = {
  userId: 0,
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
  createBy: '',
  updateBy: '',
  updateTime: null,
  remark: '',
  createTime: '',
  loginDate: '',
  roles: [],
  roleIds: [],
  postIds: [],
  admin: false,
};
export const userRoles = ref<SystemRole[]>([]);
export const userPosts = ref<SystemPost[]>([]);
// 当前选中的一项，用于删除，编辑
export const userForm = ref<UserProfileData>({
  ...form,
});

// 重置表格
export const userResetForm = () => {
  userForm.value = {
    ...form,
  };
};

// 表格校验
export const userRules: Record<string, Rule[]> = {
  userId: [{ required: false, trigger: 'change' }],
  deptId: [{ required: false, trigger: 'change' }],
  userName: [{ required: true, trigger: 'change' }],
  nickName: [{ required: true, trigger: 'change' }],
  userType: [{ required: false, trigger: 'change' }],
  email: [{ required: false, trigger: 'change' }],
  phonenumber: [{ required: false, trigger: 'change' }],
  sex: [{ required: false, trigger: 'change' }],
  avatar: [{ required: false, trigger: 'change' }],
  password: [{ required: false, trigger: 'change' }],
  status: [{ required: false, trigger: 'change' }],
  delFlag: [{ required: false, trigger: 'change' }],
  loginIp: [{ required: false, trigger: 'change' }],
  loginDate: [{ required: false, trigger: 'change' }],
  createBy: [{ required: false, trigger: 'change' }],
  createTime: [{ required: false, trigger: 'change' }],
  updateBy: [{ required: false, trigger: 'change' }],
  updateTime: [{ required: false, trigger: 'change' }],
  remark: [{ required: false, trigger: 'change' }],
};
