import useUserStore from '@/store/user';
import { message } from 'ant-design-vue';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import { userLogout } from '../modules/system/user/utils';

export interface HttpResponse<T = unknown> {
  status: number;
  msg: string;
  code: number;
  data: T;
}

axios.interceptors.request.use(
  (config: AxiosRequestConfig | any) => {
    if (config.headers) {
      const userStore = useUserStore();
      config.headers.Authorization = `Bearer ${userStore.$state.token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// add response interceptors
axios.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data;
    if (res.code === 500) {
      message.warn(res.msg || 'System Error');
      throw new Error(res.msg || 'System Error');
    }
    if (res.code === 401) {
      userLogout();
      message.warn(res.msg || 'Permission Denied');
    }
    return response;
  },
  error => {
    if (error.toString().includes('Network Error')) {
      message.warn('Network Error');
    } else {
      message.error(error.message);
    }
    return Promise.reject(error);
  },
);
