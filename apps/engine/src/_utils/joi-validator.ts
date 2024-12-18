import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export const JoiValidator = (schema: Joi.ObjectSchema) => (req: Request, res: Response, next: NextFunction) => {
  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).json(error);
  } else {
    next();
  }
}