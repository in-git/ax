/* 获取静态资源目录 */
export const getStaticImage = (path: string) => {
  if (!path) {
    return '';
  }
  const resourceUrl = 'http://150.158.14.110:8002';
  return `${resourceUrl}/${path}`;
};

export const getFavicon = (src: string) => {
  return `https://www.favicon.vip/get.php?url=${src}`;
};
