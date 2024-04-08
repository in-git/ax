import useAIStore from '@/store/AI/AI';

import type { AIMessage } from '@/store/AI/types';
import axios from 'axios';

interface AIResponse {
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
export const sendMsg = (messages: AIMessage[]) => {
  const AIStore = useAIStore();
  const baseUrl = AIStore.$state.qianFan.baseUrl;
  const http = axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${AIStore.$state.qianFan.token}`,
    },
  });
  return http.post<AIResponse>(`${baseUrl}`, {
    messages,
    model: AIStore.$state.qianFan.model,
    stream: false,
    temperature: AIStore.$state.qianFan.temperature,
    top_p: AIStore.$state.qianFan.top_p,
  });
};
