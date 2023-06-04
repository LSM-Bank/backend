import { compareSync } from "bcryptjs";
import { prismaClient } from "../../server";
import jwt, { Secret } from "jsonwebtoken";
import "dotenv/config";
import AppError from "../../errors/appError";
import { ILogin } from "../../interfaces/login.interfaces";

const loginService = async (data: ILogin) => {
  const { email, password } = data;
  const isUser = await prismaClient.users.findUnique({
    where: {
      email,
    },
  });

  if (!isUser) {
    throw new AppError("Email or password is invalid!", 401);
  }

  const passwordSearch = compareSync(password, isUser.password);

  if (!passwordSearch) {
    throw new AppError("Email or password is invalid!", 404);
  }

  const token = jwt.sign(
    { email: isUser.email, id: isUser.id },
    process.env.SECRET_KEY as Secret,
    {
      expiresIn: "24h",
      subject: isUser.id,
    }
  );

  return { token, id: isUser };
};

export { loginService };
