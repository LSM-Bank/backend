import { hashSync } from "bcryptjs";
import { prismaClient } from "../../server";
import { IUserRegister } from "../../interfaces/users.interfaces";

function exclude<User, Key extends keyof User>(
  user: User,
  keys: Key[]
): Omit<User, Key> {
  for (let key of keys) {
    delete user[key];
  }
  return user;
}

const registerUserService = async (data: IUserRegister) => {
  const { password: passwordData, ...userData } = data;
  const hashedPassword = hashSync(passwordData, 10);
  const user = await prismaClient.users.create({
    data: {
      ...userData,
      password: hashedPassword,
      balance: 0.00
    },
  });

  const resultUser = exclude(user, ["password"]);

  return resultUser;
};

export { registerUserService };
