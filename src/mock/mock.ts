import Mock from 'mockjs';
import './auth/auth';
import { result } from './utils';
import './wallpaper/wallpaper';

Mock.mock('/api/test', 'get', options => {
  return result({
    image: Mock.mock('@string("number", 4)'),
  });
});
// test.ts
