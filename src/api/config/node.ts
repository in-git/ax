import { message } from 'ant-design-vue';
import axios from 'axios';

export const http = axios.create({
  baseURL: 'http://localhost:8888/',
});
http.interceptors.response.use(
  response => {
    if (response.data.code !== 200) {
      message.warn('Nodejs出了点问题');
    }
    return response.data;
  },
  error => {
    return Promise.reject(error);
  },
);

export default http;
