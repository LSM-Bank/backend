import { Repository } from "typeorm";
import { User } from "../entities/users.entity";
import AppDataSource from "../data-source";
import { IUser } from "../interfaces/users.interfaces";
import AppError from "../errors/appError";
import { userSchema } from "../schemas/users.schema";

const getUserIdHelpers = async (id: string) => {
  const userRepository: Repository<User> =
    AppDataSource.getMongoRepository(User);

  const users: IUser[] = await userRepository.find();
  const findUser = users.find((element) => element.id == id);

  if (!findUser) {
    throw new AppError("Invalid user Id");
  }

  return findUser;
};

export default getUserIdHelpers;
