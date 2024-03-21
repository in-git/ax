import Mock from 'mockjs';
import { menus } from './data';

const result = (data: any) => {
  return {
    code: 200,
    data,
    msg: 'Success',
  };
};
Mock.mock('/api/login', 'post', options => {
  return {
    name: 'test',
    age: 18,
  };
});

Mock.mock('/api/auth/menu', 'get', options => {
  return result(menus);
});
