import { NextFunction, Request, Response } from "express";
import AppError from "../../errors/appError";
import { z } from "zod";

const validateSchemaMiddleware =
  (schema: z.ZodSchema<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const validated = schema.parse(req.body);

      req.body.validatedBody = validated;
      req.body = validated;
      return next();
    } catch (err: any) {
      console.log(err);

      throw new AppError(err.error, 401);
    }
  };

export { validateSchemaMiddleware };
