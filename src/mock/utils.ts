import type { BackendResponse } from './types';

export const result = (data: any, code = 200, msg = 'Success'): BackendResponse => {
  return {
    code,
    data,
    msg,
  };
};
