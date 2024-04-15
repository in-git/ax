import type { Response } from '@/api/config/types';
import axios from 'axios';

/* 获取千帆模型TOKEN */

export const getQFToken = (ak: string, sk: string) => {
  return axios.get<Response<QFResponse>>(`tool/api/qf-token`, {
    params: {
      ak,
      sk,
    },
  });
};
