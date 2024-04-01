import { defineStore } from 'pinia';
import type { Conversation } from './types';
interface Config {
  token: string;
  temperature: number;
  top_p: number;
  memory: boolean;
  model: 'gpt-3.5-turbo';
  splitSize: number;
  max_tokens: number;
  frequency_penalty: number;
  stream: boolean;
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

interface GPT {
  config: Config;
  conversation: IConversation;
}
const useGptStore = defineStore('gpt', {
  state: (): GPT => ({
    config: {
      token: '',
      model: 'gpt-3.5-turbo',
      temperature: 1,
      top_p: 1,
      memory: true,
      splitSize: 40,
      max_tokens: 10,
      frequency_penalty: 0,
      stream: false,
    },
    conversation: {
      list: [],
      history: [],
    },
  }),
  persist: true,
});

export default useGptStore;
