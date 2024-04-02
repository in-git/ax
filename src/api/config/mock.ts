import { message } from 'ant-design-vue';
import axios from 'axios';

export const mock = axios.create({
  baseURL: '/api',
});

mock.interceptors.response.use(
  response => {
    if (response.data.code !== 200) {
      message.warn('Mockjs出了点问题');
    }
    return response.data;
  },
  error => {
    return Promise.reject(error);
  },
);

export default mock;
