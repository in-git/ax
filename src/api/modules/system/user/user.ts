import type { IQuery, Response, TableResponse } from '@/api/config/types';
import axios from 'axios';
import type {
  CaptchaResponse,
  LoginParams,
  LoginResponse,
  Routers,
  UserDept,
  UserProfileData,
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
  return axios.get<Response<UserDept[]>>(`system/user/deptTree`);
};
export const userList = (query: IQuery) => {
  return axios.get<TableResponse<UserProfileData>>(`system/user/list`, {
    params: query,
  });
};

export const deleteUsers = (ids: number[]) => {
  return axios.delete<Response>(`system/user/${ids.join(',')}`);
};

export const exportExcel = (data: IQuery) => {
  return axios.post<Response>(`system/user/export`, data);
};
