import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Savings } from "../../entities/savings.entity";
import { ISaving, ISavingUpdate } from "../../interfaces/savings.interfaces";
import { savingSchema } from "../../schemas/savings.schemas";

const updateSavingService = async (
  id: string,
  data: ISavingUpdate
): Promise<ISaving> => {
  const savingRepository: Repository<Savings> =
    AppDataSource.getMongoRepository(Savings);

  const saving = await savingRepository.findOne({
    where: {
      id: id,
    },
  });
  await savingRepository.save({
    ...saving,
    ...data,
  });

  const returnData = savingSchema.parse(saving);

  return returnData;
};

export { updateSavingService };
