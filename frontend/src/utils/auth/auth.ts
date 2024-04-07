/* 判断是否为开发环境,用于禁用一些开发者选项 */
export const isDevelopment = () => {
  return import.meta.env.MODE === 'development';
};
