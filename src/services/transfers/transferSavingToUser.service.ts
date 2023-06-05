import { Repository } from "typeorm";
import { Transfer } from "../../entities/transfers.entity";
import AppError from "../../errors/appError";
import { ITransfer } from "../../interfaces/transfers.interfaces";
import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { Savings } from "../../entities/savings.entity";
import getSavingIdHelper from "../../helpers/getSavingId.helpers";
import getUserIdHelpers from "../../helpers/getUserId.helpers";

const transferSavingToUserService = async (
  savingId: string,
  userId: string,
  value: number
) => {
  if (value < 1) {
    throw new AppError(
      "Low value transfer. The minimum amount for transfer is 1 real",
      401
    );
  }

  const transferRepository: Repository<Transfer> =
    AppDataSource.getMongoRepository(Transfer);
  const savingRepository: Repository<Savings> =
    AppDataSource.getMongoRepository(Savings);
  const userRepository: Repository<User> =
    AppDataSource.getMongoRepository(User);

  const user = await getUserIdHelpers(userId);

  const saving = await getSavingIdHelper(savingId);

  if (saving.balance < value) {
    throw new AppError("Not enough balance to carry out this transaction", 401);
  }

  const transfer = transferRepository.create({
    value,
    savingId,
    userId,
    received: user,
  });

  await userRepository.save({ ...user, balance: user.balance + value });
  await savingRepository.save({ ...saving, balance: saving.balance - value });

  await transferRepository.save(transfer);

  return { message: "Sucess" };
};

export { transferSavingToUserService };
