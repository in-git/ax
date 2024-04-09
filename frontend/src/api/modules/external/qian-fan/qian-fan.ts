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

interface QFConfig {
  messages: any[];
}

/* 发送信息 */
export const sendMsg = async (config: QFConfig) => {
  const AIStore = useAIStore();
  const access_token = AIStore.$state.qianFan.access_token;
  if (!access_token) {
    message.warning('请在设置中心中获取token');
    throw new Error('没有填写Token');
  }
  const url = `https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/completions?access_token=${access_token}`;
  return http.post(url, {
    messages: config.messages,
    disable_search: false,
    enable_citation: false,
  });
};

/* 获取token */
export const getAccessToken = (ak: string, sk: string) => {
  let url = `https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=${ak}&client_secret=${sk}`;
  return http.post(url);
};
