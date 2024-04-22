import type { IconType } from '@/types/system';
import { giteeResourceHost } from './host';

/* 根据类型获取系统图标 */
export const getSysIcon = (type: IconType | string, name: string) => {
  return `${giteeResourceHost}${type}/${name}`;
};
