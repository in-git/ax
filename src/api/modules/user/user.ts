import type { Response } from '@/api/config/types';
import axios from 'axios';
import type { CaptchaResponse, LoginParams, LoginResponse } from './types';

export const login = (data: LoginParams) => {
  return axios.post<LoginResponse>('/login', data);
};

export const captcha = () => {
  return axios.get<Response & CaptchaResponse>('/captchaImage');
};
