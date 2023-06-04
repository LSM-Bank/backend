import { prismaClient } from "../../server";
import dataIsEmpty from "../../helpers/global";
import { ISaving, ISavingUpdate } from "../../interfaces/savings.interfaces";

const updateSavingService = async (
  id: string,
  data: ISavingUpdate
): Promise<ISaving> => {
  dataIsEmpty(data);

  const saving = (await prismaClient.savings.update({
    where: {
      id: id,
    },
    data: data,
  })) as ISaving;

  return saving;
};

export { updateSavingService };
