import { NextFunction, Request, Response } from "express";
import getSavingIdHelper from "../../helpers/getSavingId.helpers";

const isValidSavingIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { savingId } = req.params;

  req.body.validatedBody = await getSavingIdHelper(savingId);
  return next();
};

export { isValidSavingIdMiddleware };
