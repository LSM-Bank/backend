import { NextFunction, Request, Response } from "express";
import AppError from "../../errors/appError";
import { Repository } from "typeorm";
import { User } from "../../entities/users.entity";
import AppDataSource from "../../data-source";
import { userSchema } from "../../schemas/users.schema";
import { IUser } from "../../interfaces/users.interfaces";

const validateEmailMiddlewares = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body.validatedBody;

  const userRepository: Repository<User> = AppDataSource.getMongoRepository(User);

  const findUser: User | null = await userRepository.findOneBy({
    email: email,
  });

  const user: IUser = userSchema.parse(findUser);

  if (user) {
    throw new AppError("Email already exists.", 409);
  }

  return next();
};

export { validateEmailMiddlewares };
