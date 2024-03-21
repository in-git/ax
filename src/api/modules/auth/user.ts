import axios from 'axios';

export const login = () => {
  return axios.post('/login');
};
