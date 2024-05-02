import axios from 'axios';

/* 初始化壁纸 */
export const initWallpaper = () => {
  return axios.get(`system/gallery/initWallpaper`);
};
