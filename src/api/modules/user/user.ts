import type { Response } from '@/api/config/types';
import axios from 'axios';
import type { CaptchaResponse, LoginParams, LoginResponse } from './types';

export const login = (data: LoginParams) => {
  return axios.post<Response<LoginResponse>>('/public/login', data);
};

export const captcha = () => {
  return axios.get<Response<CaptchaResponse>>('/captcha/captchaImage', {
    params: {
      type: 'math',
    },
  });
};
