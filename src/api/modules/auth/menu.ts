import type { Response } from '@/api/config/types';
import type { ItemType } from 'ant-design-vue';
import axios from 'axios';

export const menuList = () => {
  return axios.get<Response<ItemType[]>>('/auth/menu');
};
