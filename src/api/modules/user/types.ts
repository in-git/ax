export interface LoginParams {
  username: string;
  password: string;
  code: string;
  uuid: string;
}
export interface CaptchaResponse {
  msg: string;
  img: string;
  code: number;
  captchaEnabled: boolean;
  uuid: string;
}
export interface LoginResponse {
  msg: string;
  code: number;
  token: string;
}
