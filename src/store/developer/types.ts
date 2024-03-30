export interface URLSelection {
  name: string;
  url: string;
  id: string;
}
export interface Developer {
  baseURL: string;
  timeout: number;
  urlSelection: URLSelection[];
}
