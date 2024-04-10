import axios from 'axios';

/* 第三方API */
export const getLogo = (href: string) => {
  return `https://favicon.qqsuu.cn/${href}`;
};

const http = axios.create();
/* BING 图片 */
export const bingImage = `https://api.vvhan.com/api/bing`;
export const getPexels = (page: number, per_page: number) => {
  return http.get(`https://api.pexels.com/v1/`, {
    headers: {
      Authorization: '',
    },
    params: {
      page,
      per_page,
    },
  });
};
