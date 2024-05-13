import { openLogin } from '@/global/window/widget';
import useUserStore from '@/store/user';
import { convertParamsToFormat } from '@/utils/common/format';
import { notify } from '@/views/desktop/notice/data';
import { message } from 'ant-design-vue';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { userLogout } from '../modules/system/user/utils';

/* 取消请求列表 */
const cancelList = ref<AbortController[]>([]);

axios.interceptors.request.use(
  (config: AxiosRequestConfig | any) => {
    if (config.headers) {
      if (config.params && config.params.params) {
        config.url = config.url + '?' + convertParamsToFormat(config.params.params);
        delete config.params.params;
      }
      const userStore = useUserStore();
      config.headers.Authorization = `Bearer ${userStore.$state.token}`;
      const controller = new AbortController();
      config.signal = controller.signal;
      cancelList.value.push(controller);
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data;
    if (res.code === 500) {
      message.warn(res.msg || 'System Error');
      throw new Error(res.msg || '系统内部错误');
    } else if (res.code === 403) {
      message.warn('没有权限');
      throw new Error(res.msg || '没有权限');
    } else if (res.code === 401) {
      userLogout();
      openLogin();
    }
    return response;
  },
  error => {
    const errMsg: string = error.toString();
    if (errMsg.includes('Network Error')) {
      notify({
        content: `和服务器失去链接，具体信息:${error.toString()}`,
        title: '网络错误',
        type: 'error',
        id: nanoid(),
      });
      message.warn('网络错误');
    } else if (errMsg.includes('canceled')) {
      // 用户取消请求
    } else {
      message.error(error.message);
    }
    return Promise.reject(error);
  },
);

/* 取消用户请求 */
export const cancelAllRequest = () => {
  cancelList.value.forEach(e => {
    e.abort('用户取消请求');
  });
  cancelList.value = [];
};
