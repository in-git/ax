import { NextFunction, Request, Response } from "express";


const whiteList = [
  '/public/login',
]
// 权限校验
export const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.token;

  const { path } = req
  
  if (token || whiteList.includes(path.toLowerCase())) {
    next();
  } else {
    res.status(403).send('No permission, please log in');
  }
}
