import { ISaving, ISavingRegister } from "../../interfaces/savings.interfaces";
import { IUser } from "../../interfaces/users.interfaces";
import { prismaClient } from "../../server";

const registerSavingService = async (
  data: ISavingRegister,
  userId: string
): Promise<ISaving> => {
  const saving = (await prismaClient.savings.create({
    data: {
      ...data,
      userId
    },
  })) as ISaving;

  return saving;
};

export { registerSavingService };
