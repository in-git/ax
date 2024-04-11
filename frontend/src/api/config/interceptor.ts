import useUserStore from '@/store/user';
import { notify } from '@/views/desktop/notice/data';
import { useDebounceFn } from '@vueuse/core';
import { message, Modal } from 'ant-design-vue';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import { userLogout } from '../modules/system/user/utils';

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

const debouncedFn = useDebounceFn(error => {
  notify({
    content: `和服务器失去链接，具体信息:${error.toString()}`,
    title: '网络错误',
    type: 'error',
  });
  message.warn('网络错误');
  console.log('执行错误');
}, 100);

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data;
    if (res.code === 500) {
      message.warn(res.msg || 'System Error');
      throw new Error(res.msg || 'System Error');
    }
    if (res.code === 401) {
      Modal.confirm({
        title: '退出登录',
        content: '登录已过期',
        onOk() {
          userLogout();
          message.warn('没有权限');
          window.location.reload();
        },
      });
    }
    return response;
  },
  error => {
    if (error.toString().includes('Network Error')) {
      debouncedFn(error);
    } else {
      message.error(error.message);
    }
    return Promise.reject(error);
  },
);
