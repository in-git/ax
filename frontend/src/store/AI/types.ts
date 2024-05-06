export interface Conversation {
  title: string;
  time: string;
  id: string;
  /* Allows editing session names */
  edit: boolean;
  messageList: AIMessage[];
}
export interface AIMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
  time?: string;
}
interface QFConfig {
  /* ak+sk用于获取access_token */
  ak: string;
  sk: string;
  /* 发起请求的秘钥 */
  access_token: string;
  model: string;
  // 记忆功能
  memory: boolean;
  //  较高的数值会使输出更加随机，而较低的数值会使其更加集中和确定。建议该参数和top_p只设置1个。
  temperature: number;
  //  影响输出文本的多样性，取值越大，生成文本的多样性越强。建议该参数和temperature只设置1个。
  top_p: number;
  // 用通过对已生成的token增加惩罚，减少重复生成的现象。说明：值越大表示惩罚越大。
  penalty_score: number;
  /* 系统人设 */
  system: string;
  disable_search: boolean;
  enable_citation: boolean;
  max_output_tokens: number;
  stream: boolean;
  /* 聊天信息 */
  messages: Message[];
  /* 预设词 */
  prompt: string;
  baseUrl: string;
  splitSize: number;
}

interface Message {
  role: string;
  content: string;
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

export interface AIStore {
  qianFan: QFConfig;
  conversation: IConversation;
}
