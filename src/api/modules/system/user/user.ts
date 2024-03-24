import type { Response } from '@/api/config/types';
import axios from 'axios';
import type {
  CaptchaResponse,
  LoginParams,
  LoginResponse,
  Routers,
  UserDept,
  UserProfileRes,
} from './types';

export const login = (data: LoginParams) => {
  return axios.post<LoginResponse>('/login', data);
};

export const logout = () => {
  return axios.post<LoginResponse>('/logout');
};

export const captcha = () => {
  return axios.get<Response & CaptchaResponse>('/captchaImage');
};

export const getRouters = () => {
  return axios.get<Response<Routers[]>>('/getRouters');
};

export const profile = () => {
  return axios.get<UserProfileRes>('/system/user/profile');
};

interface UpdateProfileData {
  nickName: string;
  phonenumber: string;
  email: string;
  sex: string;
}
export const updateProfile = (data: UpdateProfileData) => {
  return axios.put<Response>(`/system/user/profile`, data);
};
export const updatePassword = (newPassword: string, oldPassword: string) => {
  return axios.put<Response>(
    `/system/user/profile/updatePwd?oldPassword=${oldPassword}&newPassword=${newPassword}`,
  );
};
export const deptTree = () => {
  return axios.get<Response<UserDept>>(`system/user/deptTree`);
};
