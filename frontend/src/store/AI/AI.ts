import { defineStore } from 'pinia';
import type { AIStore } from './types';

const useAIStore = defineStore('AI', {
  state: (): AIStore => ({
    qianFan: {
      ak: '',
      sk: '',
      access_token: '',
      model: '',
      memory: true,
      temperature: 0.95,
      top_p: 0.8,
      penalty_score: 1,
      system: '',
      disable_search: false,
      enable_citation: false,
      max_output_tokens: 0,
      stream: false,
      messages: [],
      prompt: '',
      baseUrl: '',
    },
    conversation: {
      list: [],
      history: [],
    },
  }),
  persist: true,
});

export default useAIStore;
