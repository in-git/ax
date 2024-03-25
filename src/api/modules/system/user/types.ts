import type { SystemPost } from '../post/types';
import type { Role } from '../role/types';

export interface LoginParams {
  username: string;
  password: string;
  code: string;
  uuid: string;
}
export interface CaptchaResponse {
  msg: string;
  img: string;
  code: number;
  captchaEnabled: boolean;
  uuid: string;
}
export interface LoginResponse {
  msg: string;
  code: number;
  token: string;
}
export interface Routers {
  name: string;
  path: string;
  hidden: boolean;
  redirect?: string;
  component: string;
  alwaysShow?: boolean;
  meta: Meta;
  children?: Routers[];
}

export interface Meta {
  title: string;
  icon: string;
  noCache: boolean;
  link?: string;
}
export interface UserProfileRes {
  msg: string;
  postGroup: string;
  code: number;
  data: UserProfileData;
  roleGroup: string;
}

export interface UserProfileData {
  createBy: string;
  createTime: string;
  updateBy?: any;
  updateTime?: any;
  remark: string;
  userId: string;
  deptId: number;
  userName: string;
  nickName: string;
  email: string;
  phonenumber: string;
  sex: string;
  avatar: string;
  password: string;
  status: string;
  delFlag: string;
  loginIp: string;
  loginDate: string;
  dept?: Dept;
  roles: Role[];
  roleIds: number[];
  postIds: number[];
  roleId?: any;
  admin: boolean;
}

export interface Dept {
  createBy?: any;
  createTime?: any;
  updateBy?: any;
  updateTime?: any;
  remark?: any;
  deptId: number;
  parentId: number;
  ancestors: string;
  deptName: string;
  orderNum: number;
  leader: string;
  phone?: any;
  email?: any;
  status: string;
  delFlag?: any;
  parentName?: any;
  children: any[];
}

export interface UserDept {
  id: number;
  label: string;
  children: UserDept[];
}

export interface UserInfoData {
  msg: string;
  code: number;
  roleIds: number[];
  data: UserProfileData;
  postIds: number[];
  roles: Role[];
  posts: SystemPost[];
}
