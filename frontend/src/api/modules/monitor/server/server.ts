/* 获取服务器信息 */
import type { Response } from '@/api/config/types';
import axios from 'axios';

export const monitorServer = () => {
  return axios.get<Response<SystemServer>>(`monitor/server`);
};
