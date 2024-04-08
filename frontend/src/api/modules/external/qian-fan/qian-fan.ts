import axios from 'axios';
const AK = 'pWqAtc****uO5ONd';
const SK = 'SxLdzl****yy3k5g';

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
  const { data } = await getAccessToken();
  const access_token = data.data;
  const url = `https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/completions?access_token=${access_token}`;
  http.post(url, {
    messages: config.messages,
    disable_search: false,
    enable_citation: false,
  });
};

/* 获取token */
export const getAccessToken = () => {
  let url = `https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=${AK}&client_secret=${SK}`;
  return http.post(url);
};
