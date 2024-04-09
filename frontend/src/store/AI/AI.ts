import { defineStore } from 'pinia';
import type { Conversation } from './types';

interface QFConfig {
  /* ak+sk用于获取access_token */
  ak: string;
  sk: string;
  /* 发起请求的秘钥 */
  access_token: string;
  model: string;
}

export interface History {
  text: string;
  id: string;
}
interface IConversation {
  list: Conversation[];
  /* 预设 */
  history: History[];
}

interface AI {
  qianFan: QFConfig;
  conversation: IConversation;
}
const useAIStore = defineStore('AI', {
  state: (): AI => ({
    qianFan: {
      ak: '',
      sk: '',
      access_token: '',
      model: '',
    },
    conversation: {
      list: [],
      history: [],
    },
  }),
  persist: true,
});

export default useAIStore;
