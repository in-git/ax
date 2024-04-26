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
