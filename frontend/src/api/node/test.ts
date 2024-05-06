import http from '@/api/config/node';

export const testNode = () => {
  return http.get(`/public/test`);
};
