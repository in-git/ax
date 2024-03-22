import Mock from 'mockjs';
import { nanoid } from 'nanoid';
import { result } from '../utils';

/* 用户登录，携带用户相关的信息 */
Mock.mock('/public/login', 'post', options => {
  return result({
    token: nanoid(18),
  });
});
