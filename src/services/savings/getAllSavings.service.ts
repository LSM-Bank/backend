import { prismaClient } from "../../server";

const getAllSavingsService = async (
  skip: number,
  take: number,
  userId: string
): Promise<any> => {
  const [savings, total] = await prismaClient.$transaction([
    prismaClient.savings.findMany({
      take,
      skip,
      where: {
        userId: userId,
      },
    }),
    prismaClient.savings.count(),
  ]);

  const totalPage = Math.ceil(total / take);
  return { total, totalPage, savings };
};

export { getAllSavingsService };
