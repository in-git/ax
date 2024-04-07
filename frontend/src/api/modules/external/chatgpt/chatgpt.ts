import useGptStore from '@/store/gpt/gpt';

import type { GptMessage } from '@/store/gpt/types';
import axios from 'axios';

interface GptResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Choice[];
  usage: Usage;
  system_fingerprint: string;
}

interface Usage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}

interface Choice {
  index: number;
  message: Message;
  logprobs?: any;
  finish_reason: string;
}

interface Message {
  role: string;
  content: string;
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
  return http.post<GptResponse>(`${baseUrl}`, {
    messages,
    model: gptStore.$state.config.model,
    stream: false,
    temperature: gptStore.$state.config.temperature,
    top_p: gptStore.$state.config.top_p,
  });
};
