import type { IQuery } from '@/api/config/types';

export function bytesToSize(bytes: number): string {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Byte';
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / 1024 ** i).toFixed(2)} ${sizes[i]}`;
}
/* 获取精确域名 */
export const extractDomain = (url: string): string => {
  try {
    const domain = new URL(url).hostname;
    const parts = domain.split('.');
    if (parts.length > 2) {
      return parts.slice(-2).join('.');
    }
    return domain;
  } catch (error) {
    console.error('Invalid URL:', error);
    return url;
  }
};
export const convertParamsToFormat = (params: IQuery) => {
  let queryString = '';

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const encodedKey = encodeURIComponent(`params[${key}]`);
      const encodedValue = encodeURIComponent(params[key]);
      queryString += `${encodedKey}=${encodedValue}&`;
    }
  }

  // 删除末尾的 "&" 符号
  queryString = queryString.slice(0, -1);

  return queryString;
};
/* 驼峰转下划线 */
export const toLine = (name: string) => {
  return name.replace(/([A-Z])/g, '_$1').toLowerCase();
};
