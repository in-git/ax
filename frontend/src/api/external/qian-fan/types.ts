/*
 * @LastEditors: 吴文龙
 */
interface QFMessage {
  role: string;
  content: string;
}
interface QFConfig {
  temperature: number;
  top_p: number;
  penalty_score: number;
  stream: boolean;
  messages: QFMessage[];
  prompt: string;
}
interface QFResponse {
  id: string;
  object: string;
  created: number;
  result: string;
  is_truncated: boolean;
  need_clear_history: boolean;
  finish_reason: string;
  usage: Usage;
}

interface Usage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}
interface QFResponse {
  refresh_token: string;
  expires_in: number;
  session_key: string;
  access_token: string;
  scope: string;
  session_secret: string;
}
