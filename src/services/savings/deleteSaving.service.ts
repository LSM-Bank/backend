import { Repository } from "typeorm";
import { Savings } from "../../entities/savings.entity";
import AppDataSource from "../../data-source";

const deleteSavingService = async (id: string): Promise<void> => {
  const savingRepository: Repository<Savings> =
    AppDataSource.getMongoRepository(Savings);
  
  const saving: Savings | null = await savingRepository.findOne({
    where: {
      id: id,
    },
  });

  await savingRepository.remove(saving!);

  return;
}

export { deleteSavingService };
