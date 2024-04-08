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
