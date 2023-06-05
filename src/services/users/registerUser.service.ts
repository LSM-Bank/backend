import { Repository } from "typeorm";
import { User } from "../../entities/users.entity";
import { userSchema } from "../../schemas/users.schema";
import AppDataSource from "../../data-source";

const registerUserService = async (data: any) => {
  const userRepository: Repository<User> =
    AppDataSource.getMongoRepository(User);
  const user = userRepository.create(data);
  await userRepository.save(user);

  const newUser = userSchema.parse(user);
  return newUser;
};

export { registerUserService };
