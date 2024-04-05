import Mock from 'mockjs';
import { result } from './utils';

Mock.mock('/api/test', 'get', options => {
  return result({
    image: Mock.mock('@string("number", 4)'),
  });
});
