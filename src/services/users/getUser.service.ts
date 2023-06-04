import { prismaClient } from "../../server";

const getUserService = async (id: string) => {
  const user = await prismaClient.users.findUnique({
    where: { id },
    include: {
      savings: {
        select: {
          id: true,
          name: true,
          balance: true,
        },
      },
    },
  });

  return user;
};

export { getUserService };
