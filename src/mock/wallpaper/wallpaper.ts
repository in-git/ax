import Mock, { Random } from 'mockjs';
import { result } from '../utils';

Mock.mock('/api/public/wallpaper/images', 'get', options => {
  let results = [];
  for (let index = 0; index < 30; index++) {
    results.push({
      image: Random.image('1920x5:3', Random.color()),
      title: Random.title(1, 3),
    });
  }
  return result(results);
});

Mock.mock('/api/public/wallpaper/tags', 'get', options => {
  let results = [];
  for (let index = 0; index < 8; index++) {
    results.push({
      cid: Random.id(),
      title: Random.string(3, 6),
    });
  }
  return result(results);
});
