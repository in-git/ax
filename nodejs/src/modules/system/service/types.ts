export interface GenerateInterface {
  gptConfig: {
    messages: Message[];
    model: string;
    stream: boolean;
    temperature: string;
    top_p: string;
    token: string;
    baseUrl: string;
  };
  tableConfig: {
    tableName: string;
    columns: any[];
    moduleName: string;
    serviceName: string;
  };
}

export interface GptResponse {
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
