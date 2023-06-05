import { Repository } from "typeorm";
import { User } from "../../entities/users.entity";
import { IUser } from "../../interfaces/users.interfaces";
import { userSchema } from "../../schemas/users.schema";
import AppDataSource from "../../data-source";
import AppError from "../../errors/appError";

const getUserService = async (id: string) => {
  const userRepository: Repository<User> =
    AppDataSource.getMongoRepository(User);

  const users: IUser[] = await userRepository.find();
  const findUser = users.find(element => element.id == id)

  if (!findUser) {
    throw new AppError("id");
  }
  const user: IUser = userSchema.parse(findUser);
  return user;
};

export { getUserService };
