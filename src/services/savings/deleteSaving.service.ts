import { prismaClient } from "../../server";

const deleteSavingService = async (id: string): Promise<void> => {
  await prismaClient.savings.delete({
    where: {
      id,
    },
  });

  return;
};

export { deleteSavingService };
