/**
 * @description: 拼接URL，返回完整URL
 * @param {string} base BASE 路径
 * @param {array} paths 待拼接的路径
 * @return {string}
 */
export const joinUrl = (base: string, ...paths: string[]): string => {
  const cleanPaths: string[] = paths.map(path => path.replace(/^\/+|\/+$/g, ''));
  const joinedPath: string = cleanPaths.join('/');
  return `${base.replace(/\/+$/, '')}/${joinedPath}`;
};
