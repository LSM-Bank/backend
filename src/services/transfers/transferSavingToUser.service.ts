import AppError from "../../errors/appError";
import { ITransfer } from "../../interfaces/transfers.interfaces";
import { prismaClient } from "../../server";

const registerTransferSavingToUserService = async (
  savingId: string,
  userId: string,
  value: number
): Promise<ITransfer> => {
  if (value < 1) {
    throw new AppError(
      "Low value transfer. The minimum amount for transfer is 1 real",
      401
    );
  }
  const transfer = (await prismaClient.transfers.create({
    data: {
      value,
      savingId,
      userId,
    },
  })) as ITransfer;

  return transfer;
};

export { registerTransferSavingToUserService };
