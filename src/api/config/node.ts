import axios from 'axios';

export const node = axios.create({
  baseURL: 'http://localhost:8888/',
});
node.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  },
);

export default node;
