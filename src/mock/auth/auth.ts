import Mock from 'mockjs';
import { result } from '../utils';
import { menus } from './data';

Mock.mock('/api/auth/menu', 'get', options => {
  return result(menus);
});
