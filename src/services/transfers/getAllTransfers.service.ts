import { prismaClient } from "../../server";

const getAllTransfersService = async (
  skip: number,
  take: number,
  userId: string
): Promise<any> => {
  const [transfers, total] = await prismaClient.$transaction([
    prismaClient.transfers.findMany({
      take,
      skip,
      where: {
        userId: userId,
      },
    }),
    prismaClient.transfers.count(),
  ]);

  const totalPage = Math.ceil(total / take);
  return { total, totalPage, transfers };
};

export { getAllTransfersService };
