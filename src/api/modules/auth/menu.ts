import type { Feedback } from '@/api/config/types';
import type { ItemType } from 'ant-design-vue';
import axios from 'axios';

export const menuList = () => {
  return axios.get<Feedback<ItemType[]>>('/auth/menu');
};
