import useGptStore from '@/store/gpt/gpt';

import type { GptMessage } from '@/store/gpt/types';
import axios from 'axios';
interface GptParams {
  messages: GptMessage[];
  model: 'gpt-3.5-turbo';
  stream: boolean;
  temperature: number;
  top_p: number;
}
export const sendMsg = (messages: GptMessage[]) => {
  const gptStore = useGptStore();
  const baseUrl = gptStore.$state.config.baseUrl;
  const http = axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${gptStore.$state.config.token}`,
    },
  });
  return http.post(`${baseUrl}`, {
    messages,
    model: gptStore.$state.config.model,
    stream: false,
    temperature: gptStore.$state.config.temperature,
    top_p: gptStore.$state.config.top_p,
  });
};
