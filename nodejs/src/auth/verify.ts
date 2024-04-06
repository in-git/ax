import { NextFunction, Request, Response } from 'express';

// 权限校验
export const auth = (req: Request, res: Response, next: NextFunction) => {
  next();
};
