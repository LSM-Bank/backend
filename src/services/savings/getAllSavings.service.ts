import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Savings } from "../../entities/savings.entity";
import { ISaving } from "../../interfaces/savings.interfaces";
import { listSavingsSchemaResponse } from "../../schemas/savings.schemas";

const getAllSavingsService = async (userId: string): Promise<any> => {
  const repository: Repository<Savings> =
    AppDataSource.getMongoRepository(Savings);

  const savings: ISaving[] = await repository.find({
    where: {
      userId: userId,
    },
  });
  return savings;
};

export { getAllSavingsService };
