import { Repository } from "typeorm";
import { User } from "../../entities/users.entity";
import { userSchema } from "../../schemas/users.schema";
import AppDataSource from "../../data-source";
import { Deposit } from "../../entities/deposit.entity";
import AppError from "../../errors/appError";
import { IUser } from "../../interfaces/users.interfaces";
import getUserIdHelpers from "../../helpers/getUserId.helpers";

const depositService = async (id: string, value: number) => {
  const userRepository: Repository<User> =
    AppDataSource.getMongoRepository(User);
  const depositRepository: Repository<Deposit> =
    AppDataSource.getMongoRepository(Deposit);

  const deposit: Deposit = depositRepository.create({
    userId: id,
    value: value,
  });

  const user = await getUserIdHelpers(id);

  if (!user.balance || user.balance == 0) {
    const userUpdate = userRepository.create({
      ...user,
      balance: value,
    });
    await userRepository.save(userUpdate);
  } else {
    const userUpdate = userRepository.create({
      ...user,
      balance: user.balance + value,
    });
    await userRepository.save(userUpdate);
  }
  await depositRepository.save(deposit);

  return {};
};

export { depositService };
