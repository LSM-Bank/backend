import { ISaving } from "../../interfaces/savings.interfaces";

const getSavingByIdService = async (
  announcement: ISaving
): Promise<ISaving> => {
  return announcement;

  // include: {
  //   transfers: {
  //     select: {
  //       userId: true,
  //       createdAt: true,
  //     },
  //   },
  // },
};

export { getSavingByIdService };
