import { NextFunction, Request, Response } from "express";
import { prismaClient } from "../../server";
import AppError from "../../errors/appError";

const validateIsUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;

  if (!id) {
    throw new AppError("User id is required");
  }

  const user = await prismaClient.users.findUnique({
    where: { id },
    include: {},
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  req.body.validateAuth = user;
  return next();
};

export { validateIsUserMiddleware };
