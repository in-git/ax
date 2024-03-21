export interface LoginParams {
  name: string;
  password: string;
  ignoreCaptcha: boolean;
  captcha: string;
  captchaID: string;
  authMethod: 'session';
  language: 'zh' | 'en' | string;
}
export interface CaptchaResponse {
  captchaID: string;
  imagePath: string;
}
export interface LoginResponse {
  name: string;
  token: string;
  mfaStatus: string;
}
