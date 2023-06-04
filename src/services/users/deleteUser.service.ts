import AppError from "../../errors/appError";
import { prismaClient } from "../../server";

const deleteUserService = async (id: string) => {
  try {
    await prismaClient.users.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    throw new AppError("Unable to delete user");
  }
};

export { deleteUserService };
