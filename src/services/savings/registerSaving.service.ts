import { Repository } from "typeorm";
import { ISaving } from "../../interfaces/savings.interfaces";
import { Savings } from "../../entities/savings.entity";
import AppDataSource from "../../data-source";
import { savingSchema } from "../../schemas/savings.schemas";

const registerSavingService = async (data: any, userId: string) => {
  const savingRepository: Repository<Savings> =
    AppDataSource.getMongoRepository(Savings);

  const saving = savingRepository.create({
    ...data,
    userId,
  });
  const result = await savingRepository.save(saving);
  
  console.log(result);
  

  const newSaving = savingSchema.parse(result);

  return newSaving;
};

export { registerSavingService };
