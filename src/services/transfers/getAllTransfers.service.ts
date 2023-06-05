import { Repository } from "typeorm";
import { Transfer } from "../../entities/transfers.entity";
import AppDataSource from "../../data-source";
import { ITransfer } from "../../interfaces/transfers.interfaces";


const getAllTransfersService = async (userId: string): Promise<any> => {
  const transferRepository: Repository<Transfer> =
    AppDataSource.getMongoRepository(Transfer);

  const transfers: ITransfer[] = await transferRepository.find({
    where: {
      userId: userId,
    },
  });

  return transfers;
};

export { getAllTransfersService };
