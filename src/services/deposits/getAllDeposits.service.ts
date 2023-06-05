import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Deposit } from "../../entities/deposit.entity";
import { IDeposit } from "../../interfaces/deposits.interfaces";

const getAllDepositService = async (userId: string): Promise<any> => {
  const depositsRepository: Repository<Deposit> =
    AppDataSource.getMongoRepository(Deposit);

  const deposits: IDeposit[] = await depositsRepository.find({
    where: {
      userId: userId,
    },
  });  

  return deposits;
};

export { getAllDepositService };
