export interface BackendResponse {
  code: 200 | 500 | number;
  msg: string;
  data: any;
}
