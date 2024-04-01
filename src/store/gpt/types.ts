export interface Conversation {
  title: string;
  time: string;
  id: string;
  /* Allows editing session names */
  edit: boolean;
  messageList: GptMessage[];
}
export interface GptMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
  time?: string;
}
