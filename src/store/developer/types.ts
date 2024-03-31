export interface URLSelection {
  label: string;
  value: string;
  id: string;
}
export interface Developer {
  baseURL: string;
  timeout: number;
  urlSelection: URLSelection[];
}
