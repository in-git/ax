export interface URLSelection {
  label: string;
  value: string;
  id: string;
}

export interface Developer {
  baseURL: string;
  timeout: number;
  /* 静态资源地址 */
  resourceHost: string;
  urlSelection: URLSelection[];
}
export interface SystemStore {
  readMessages: any[];
  developer: Developer;
}
