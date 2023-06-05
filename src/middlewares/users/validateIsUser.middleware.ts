import { NextFunction, Request, Response } from "express";
import AppError from "../../errors/appError";
import getUserIdHelpers from "../../helpers/getUserId.helpers";

const validateIsUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.userId;
  if (!id) {
    throw new AppError("User id is required");
  }

  req.body.validateAuth = await getUserIdHelpers(id);
  return next();
};

export { validateIsUserMiddleware };
