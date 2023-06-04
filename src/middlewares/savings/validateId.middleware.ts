import { NextFunction, Request, Response } from "express";
import { prismaClient } from "../../server";
import AppError from "../../errors/appError";

const isValidSavingIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const isSaving = await prismaClient.savings.findUnique({
    where: {
      id: id,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          password: true,
          email: true,
        },
      },
      transfers: {
        select: {
          id: true,
          value: true,
          createdAt: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  if (!isSaving) {
    throw new AppError("Params 'id' is not valid uuid announcement.", 401);
  }

  req.body.validatedBody = isSaving;
  return next();
};

export { isValidSavingIdMiddleware };
