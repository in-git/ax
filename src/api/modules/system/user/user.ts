import type { Response } from '@/api/config/types';
import axios from 'axios';
import type { CaptchaResponse, LoginParams, LoginResponse, Routers, UserProfileRes } from './types';

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
