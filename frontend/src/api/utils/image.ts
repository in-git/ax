import { getStaticHost } from '@/store/system/utils';
import { giteeResourceHost } from './host';

/* 根据类型获取系统图标 */
export const getSysIcon = (path: string) => {
  `${giteeResourceHost}${path}`;
  return getStaticHost(path);
};
