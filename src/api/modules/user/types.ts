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
export interface Routers {
  name: string;
  path: string;
  hidden: boolean;
  redirect?: string;
  component: string;
  alwaysShow?: boolean;
  meta: Meta;
  children?: Routers[];
}

export interface Meta {
  title: string;
  icon: string;
  noCache: boolean;
  link?: string;
}
