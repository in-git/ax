import { Response } from "express";

export const successHandler = (res: Response, data, msg?: string) => {
  res.status(200).json({
    code: 200,
    data,
    msg
  });
};

export const errorHandler = (res: Response, data, msg?: string) => {
  res.status(500).json({
    code: 500,
    data,
    msg
  });
};

