/*
 * @LastEditors: 吴文龙
 */
import type { Response } from '@/api/config/types';
import useAIStore from '@/store/AI/AI';
import { message } from 'ant-design-vue';
import axios from 'axios';

const http = axios.create({
  method: 'POST',
  url: 'https://aip.baidubce.com/oauth/2.0/token',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

/* 发送信息 */
export const qfMsg = async (messages: QFMessage[]) => {
  const AIStore = useAIStore();
  const access_token = AIStore.$state.qianFan.access_token;
  if (!access_token) {
    message.warning('请在设置中心中获取token');
    throw new Error('没有填写Token');
  }
  const url = `https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/completions?access_token=${access_token}`;
  return http.post<QFResponse>(url, {
    temperature: AIStore.$state.qianFan.temperature,
    top_p: AIStore.$state.qianFan.top_p,
    penalty_score: AIStore.$state.qianFan.penalty_score,
    stream: AIStore.$state.qianFan.stream,
    prompt: AIStore.$state.qianFan.prompt,
    messages,
  });
};

/* 获取千帆模型TOKEN */

export const getQFToken = (ak: string, sk: string) => {
  return axios.get<Response<QFResponse>>(`tool/api/qf-token`, {
    params: {
      ak,
      sk,
    },
  });
};
