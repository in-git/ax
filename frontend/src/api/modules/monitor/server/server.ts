/* 获取服务器信息 */
import type { Response } from '@/api/config/types';
import axios from 'axios';

export const monitorServer = () => {
  return axios.get<Response<SystemServer>>(`monitor/server`);
};
export type SysInfo = {
  osName: string;
  fileSeparator: string;
};
export const getSystemInfo = () => {
  return axios.get<Response<SysInfo>>(`monitor/server/sys`);
};
