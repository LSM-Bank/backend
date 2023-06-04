import { Request, Response, NextFunction } from "express";
import jwt, { Secret } from "jsonwebtoken";
import AppError from "../../errors/appError";
import "dotenv/config";

const validateAuthUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const authToken = req.headers.authorization;

  if (!authToken) {
    throw new AppError("Missing authorization headers", 401);
  }

  const token = authToken.split(" ")[1];

  return jwt.verify(
    token,
    process.env.SECRET_KEY as Secret,
    (error, decoded) => {
      if (error) {
        throw new AppError(error.message, 401);
      }

      req.body.validateAuth = decoded;
      return next();
    }
  );
};

export { validateAuthUserMiddleware };
