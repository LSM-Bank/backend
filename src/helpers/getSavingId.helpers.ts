import { Repository } from "typeorm";
import AppDataSource from "../data-source";
import { Savings } from "../entities/savings.entity";
import AppError from "../errors/appError";

const getSavingIdHelper = async (id: string) => {
  const savingRepository: Repository<Savings> =
    AppDataSource.getMongoRepository(Savings);
  const savingsList: Savings[] = await savingRepository.find();

  const saving = savingsList.find((element) => element.id == id);

  if (!saving) {
    throw new AppError("Params 'id' is not valid.", 401);
  }
  return saving;
};

export default getSavingIdHelper;
